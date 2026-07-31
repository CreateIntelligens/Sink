# 升級：隨機短網址重複使用

本教學適用於已經在 Cloudflare Workers KV 儲存短網址的 Sink 站台。升級後，使用者再次縮短完全相同的目的網址時，系統會重複使用既有的隨機短網址，而不是建立新的 slug。

## 行為規則

- 比對採完整目的網址字串；尾端斜線、query string 與 fragment 的差異都會視為不同網址。
- 由 Dashboard 隨機按鈕產生的 slug 為「隨機 slug」；相同目的網址會回傳最早建立的隨機短網址。
- 手動輸入與 AI 產生的 slug 為「自訂 slug」；自訂 slug 可與任何連結共用同一目的網址，不參與重複使用。
- 所有沒有 `isCustomSlug` 標記的歷史資料，都會視為隨機 slug。

## 升級前確認

1. 將包含此功能的 Sink 版本部署到 production。
2. 確認本機 Node.js 為 20.11 以上，並已安裝專案依賴：`pnpm install`。
3. 使用具有目標帳號 **Workers KV Storage Write** 權限的 Cloudflare 帳號登入 Wrangler：

   ```bash
   pnpm wrangler login
   ```

4. 確認 `wrangler.jsonc` 的 `kv_namespaces` 中 `KV` binding 指向 production 使用的 namespace。

> migration 會更新既有 `link:` 記錄並新增 `url-index:` 記錄。請先在 Cloudflare Dashboard 確認選對帳號與 namespace。

## 執行 migration

先執行 dry run。它只讀取資料，會印出掃描、標記與索引數量：

```bash
CLOUDFLARE_ACCOUNT_ID="<account-id>" pnpm migrate:link-index -- --wrangler
```

確認數量後，再加上 `--apply` 執行正式寫入：

```bash
CLOUDFLARE_ACCOUNT_ID="<account-id>" pnpm migrate:link-index -- --wrangler --apply
```

大量歷史資料會以受控並行讀取、最後以 Cloudflare KV bulk write 寫入；請等待指令印出 `Migration complete` 後再結束終端機。

## 驗證結果

正式完成後，輸出會顯示：

- `Scanned`：掃描到的 `link:` 記錄數。
- `Will mark`：被補上 `isCustomSlug: false` 的未標記歷史連結數。
- `create`：依目的網址建立的 `url-index:` 索引數。
- `Migration complete`：實際成功寫入的記錄總數。

你也可以在 Dashboard 對已存在的目的網址按隨機建立：系統應回傳該網址最早的隨機短網址。手動修改 slug 或用 AI 生成 slug 則應正常建立另一筆連結。

## 重跑與回復

- migration 可安全重跑；已標記的連結不會再次補標記，網址索引會依現有資料重新建立。
- 不要把 `KV` binding 替換為其他專案的 namespace，否則會將索引寫到錯誤的站台。
- 若需要停用此行為，請先回復應用程式版本；新增的 `url-index:` 記錄不會影響舊版依 slug 讀取與轉址。
