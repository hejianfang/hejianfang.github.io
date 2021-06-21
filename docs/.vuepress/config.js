const path = require("path");
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
      { text: "每日一题", link: "/page2/" },
      {
        text: "前端技术",
        items: [
          { text: "思维导图", link: "/page3/index" },
          { text: "vue", link: "/page3/vue" },
          // { text: "TS", link: "/page2/" },
          // { text: "vue3.0", link: "/page2/" },
          // { text: "服务端渲染", link: "/page2/" },
          // { text: "node.js", link: "/page2/" },
        ]
      },
    ],
    // 侧边栏
    sidebar: {
      "/page1/": [
        {
          title: "项目总结",
          collapsable: false,
          children: [
            { title: "微前端实践", path: "/page1/qiankun" },
            { title: "多环境打包配置", path: "/page1/build" },
            { title: "webpack.DefinePlugin使用", path: "/page1/webpack" },
            { title: "一个导出pdf的方案", path: "/page1/exportPdf" },
            { title: "前端自动化发布", path: "/page1/scp2" },
            { title: "vue中动态绑定hover效果", path: "/page1/hover" },
            { title: "如何防止重复发送ajax请求", path: "/page1/axios" },
            { title: "多个请求下 loading 的展示与关闭", path: "/page1/loading" },
            { title: "git使用", path: "/page1/git" },
            { title: "package-lock.json作用", path: "/page1/package" },
            { title: "数组取交集、并集与补集", path: "/page1/array" },
            { title: "函数括号与无括号区别", path: "/page1/function" },
            { title: "js同步与异步问题", path: "/page1/js" },
            { title: "树形数据处理，过滤", path: "/page1/tree" },
            { title: "前端为什么要打包", path: "/page1/build1" },
            { title: "前端工程化", path: "/page1/engineering" },
            { title: "pointer-events使用记录", path: "/page1/pointer" },
          ],
        },
      ],
      "/page2/": [
        {
          title: "每日一题",
          collapsable: false,
          children: [
            { title: "day1", path: "/page2/day1" },
            { title: "day2", path: "/page2/day2" },
            { title: "day3", path: "/page2/day3" },
            { title: "day4", path: "/page2/day4" },
            { title: "day5", path: "/page2/day5" },
            { title: "day6", path: "/page2/day6" },
            { title: "day7", path: "/page2/day7" },
            { title: "day8", path: "/page2/day8" },
            { title: "day9", path: "/page2/day9" },
            { title: "day10", path: "/page2/day10" },
            { title: "day11", path: "/page2/day11" },
            { title: "day12", path: "/page2/day12" },
          ]
        }
      ],
      "/page3/": [
        {
          title: 'vue篇',
          collapsable: false,
          children: [
            { title: "vue框架", path: "/page3/vue1" },
            { title: "vuex", path: "/page3/vue2" },
            { title: "axios", path: "/page1/axios" },
            { title: "vue.config", path: "/page1/vueConfig" },
          ]
        }
      ]
    },
    displayAllHeaders: true,
    lastUpdated: "上次更新",
    smoothScroll: true,
  },
  postcss: {
		plugins: [require('autoprefixer')]
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
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          const date = new Date(timestamp);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const hour = date.getHours() + 8;
          const minute = date.getMinutes();
          const second = date.getSeconds();
          const week = date.getDay();
          const weeks = ["日", "一", "二", "三", "四", "五", "六"];
          return `${year}/${month}/${day} ${hour}:${minute}:${second} 周${weeks[week]}`;
        },
      },
    ],
    ["@vuepress/nprogress"],
  ],
};
