module.exports = {
	title: 'Hello dingxq',
	description: 'arx 分析',
	head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
	],
	serviceWorker: true,
	themeConfig: {
		sidebar: 'auto',
		nav: [
      { text: 'Home', link: '/' },
			{ text: 'ABOUT', link: '/about' },
			/* {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }, */
      { text: 'External', link: 'https://google.com' }
    ]
	},
	configureWebpack: {
    resolve: {
      alias: {
        '@alias': ''
      }
    }
  }
}