module.exports = {
  title: 'Webdevelopment',
  description: 'Cursus Webdevelopment graduaat Internet of Things ( VIVES )',
  themeConfig: {
    sidebar: [
		  '/00_software_installatie/',
          '/01_introduction/',
          '/02_html/',
          '/03_css/',
          '/04_javascript/',
          '/05_php/',          
    ],
	sidebarDepth: 1,
    repo: 'https://github.com/ronnymees/webdevelopment',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
	['container', {
        type: 'output',
        defaultTitle: 'Output',
      }]
  ],
}
