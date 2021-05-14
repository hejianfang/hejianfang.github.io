const path = require('path')
module.exports = {
  title: "AOMR技术博客",
  description: "查阅知识",
  base: "/",
  themeConfig: {
    search: true, //搜索
    searchMaxSuggestions: 10,
    sidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      { text: "项目积累", link: "/page1/" },
      { text: "前端技术", link: "/page2/" },
      // {
      //   text: "个人文章",
      //   items: [
      //     {
      //       text: "掘金",
      //       link: "https://juejin.im/user/5c8f3303f265da612d633276",
      //     },
      //     {
      //       text: "segmentfault",
      //       link: "https://segmentfault.com/u/helloxiaoming",
      //     },
      //     { text: "CSDN", link: "https://blog.csdn.net/qq_40588413" },
      //   ],
      // },
    ],
    // 侧边栏
    sidebar: {
      "/page1/": [
        {
          title: "项目总结",
          collapsable: true,
          children: [
            { title: "微前端实践", path: "/page1/qiankun" },
            { title: "多环境打包配置", path: "/page1/build" },
            { title: "webpack.DefinePlugin使用", path: "/page1/webpack" }
          ],
        },
      ],
      "/page2/": [
        {
          title: "前端技术",
          collapsable: true,
          children: [{ title: "vue", path: "/page2/vue" }],
        },
      ],
    },
    displayAllHeaders: true, // 默认值：false
    lastUpdated: "上次更新", // string | boolean
    smoothScroll: true,
  },
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          public: path.resolve(__dirname, "./public"),
        },
      },
    };
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          const date = new Date(timestamp)
          const year = date.getFullYear()
          const month = date.getMonth() + 1
          const day = date.getDate()
          const hour = date.getHours() + 8
          const minute = date.getMinutes()
          const second = date.getSeconds()
          const week = date.getDay()
          const weeks = ['日', '一', '二', '三', '四', '五', '六']
          return `${year}/${month}/${day} ${hour}:${minute}:${second} 周${weeks[week]}`
        }
      }
    ],
    [
      '@vuepress/nprogress'
    ]
  ]
};
