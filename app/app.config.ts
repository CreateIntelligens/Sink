export default defineAppConfig({
  title: 'glsoft.ai',
  email: 'ok@vip.david888.com',
  github: 'https://github.com/tbdavid2019/sink',
  twitter: 'https://x.com/oobwei',
  telegram: 'https://t.me/a6a7a8a9abc',
  discord: 'https://discord.gg/sink',
  blog: 'https://blog.david888.com',
  description: '短網址e.',
  image: 'https://blog.david888.com/banner.png',
  company: {
    name: '創造智能科技股份有限公司',
    nameEnglish: '創造智能科技股份有限公司',
    taxId: '90510433',
    representative: '高明慧',
    address: '台北市內湖區舊宗路1段159號9樓',
    addressEnglish: '',
  },
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
