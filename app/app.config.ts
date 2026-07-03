export default defineAppConfig({
  title: '888短網址aiurl',
  email: '104@david888.com',
  github: 'https://github.com/tbdavid2019/sinkurl',
  twitter: 'https://x.com/oobwei',
  telegram: 'https://t.me/a6a7a8a9abc',
  discord: 'https://discord.gg/9BCGcgCWpj',
  blog: 'https://david888.com',
  description: '短網址',
  image: 'https://blog.david888.com/banner.png',
  company: {
    name: '創造智能科技股份有限公司',
    nameEnglish: 'aiurl.tw / 維護者信箱 104@david888.com',
    taxId: '90510433',
    representative: '高明慧   (02)2791-3588',
    address: '台北市內湖區舊宗路1段159號9樓',
    addressEnglish: '3F., No. 159, Sec. 1, Jiuzong Rd., Neihu Dist., Taipei City 114503 , Taiwan',
  },
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
