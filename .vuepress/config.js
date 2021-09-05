module.exports = {
  title: 'M2-Team',
  dest: '.vuepress/dist',
  temp: '.vuepress/.temp',
  cache: '.vuepress/.cache',
  head: [
    ['link', { rel: 'icon', type: "image/x-icon", href: `/favicon.ico` }],
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  locales: {
    '/en-us/': {
      lang: 'en-US',
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
    },
    '/zh-hant/': {
      lang: 'zh-Hant',
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'M2Team',
    search: false,
    editLinks: false,
    lastUpdated: false,
    locales: {
      '/en-us/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          { text: 'Home', link: '/en-us/' }
        ]
      },
      '/zh-hans/': {
        selectText: '选择语言',
        label: '简体中文',
        ariaLabel: '选择语言',
        nav: [
          { text: '首页', link: '/zh-hans/' }
        ]
      },
      '/zh-hant/': {
        selectText: '選擇語言',
        label: '繁體中文',
        ariaLabel: '選擇語言',
        nav: [
          { text: '主頁', link: '/zh-hant/' }
        ]
      },
    },
    footer: {
      actor: 'M2-Team',
      actorLink: 'https://m2team.org/',
    }
  }
}
