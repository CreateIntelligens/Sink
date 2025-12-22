export default defineAppConfig({
  title: 'aiurl.tw -創造智能短網址服務 內部用- ',
  email: 'cto@vip.david888.com',
  github: 'https://github.com/CreateIntelligens/Sink',
  twitter: 'https://',
  telegram: 'https://',
  mastodon: 'https://',
  blog: 'https://david888.com',
  description: '創造智能--簡訊用的短網址服務（內部用）',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
