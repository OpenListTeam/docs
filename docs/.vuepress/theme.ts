import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme(
  {
    docsDir: "docs",
    logo: "/logo.svg",
    repo: "OpenListTeam/docs",
    // hostname: "https://docs.oplist.org",

    author: {
      name: "The OpenList Projects Contributors",
      url: "https://github.com/OpenListTeam",
    },

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    locales: {
      "/": {
        navbar: navbar.en,
        sidebar: sidebar.en,
        footer: '',
        displayFooter: true,
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        footer: '',
        displayFooter: true,
      },
    },
    markdown: {
      imgMark: true,
      imgLazyload: true,
      tabs: true,
      gfm: true,
      tasklist: true,
      include: true,
      mark: true,
      sub: true,
      sup: true,
      flowchart: true,
      mermaid: true,
      codeTabs: true,
    },
    plugins: {
      watermark:{
        enabled: false,
      },
      // 搜索从设置转移到主题
      // FIXME: update algolia configuration <https://docsearch.algolia.com/apply/>
      docsearch:{
        appId: "ECAR405NMH",
        apiKey: "ef408b6afab61e0362a93af95ad18150",
        indexName: "alist",
      },
      // 目录的自动生成
      catalog: {
        frontmatter: () => ({
          toc: false,
        }),
      },
      components: {
        components: ["ArtPlayer", "BiliBili", "Badge", "VPCard"],
      },
      icon: {
        assets: [
          "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
          "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",
          "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
        ]
      },
      comment: {
        provider: "Giscus",
        repo: "OpenListTeam/docs",
        repoId: "R_kgDOO52WYA",
        category: "Giscus Comments",
        categoryId: "DIC_kwDOO52WYM4CrXlN",
      },
      // 临时弹窗
      notice: [
        {
          path: "/",
          title: 'Kind tips',
          content: '<i class="fa-solid fa-light-emergency-on fa-bounce" style="color: #ff0000;"></i>&nbsp;<span style="color:rgb(255, 0, 0);font-weight:bold;">Please check the reminder content carefully</span><br/><br/>0.<span style="color:red; font-weight:bold;">We are working hard to prepare OpenList\'s first release, please stay tuned!</span><br/><br/>1. OpenList v3.30.0 will no longer support Win7/Server2008 because Go does not support it. <a href="https://github.com/golang/go/issues/64622">Click to view detailed instructions</a> .<br/><br/><span style="color:rgb(255, 0, 0);font-weight:bold;">2.After adding the cloud disk, please configure [anti-theft/meta information] and other measures in time to prevent the account from being [frozen/disabled] due to malicious [access/sharing] by [crawlers/others].</span></span>',
          actions: [
            {
              text: "Aliyun open",
              link: "/guide/drivers/aliyundrive_open",
              type: "primary",
            },
            {
              text: "GitHub",
              link: "https://github.com/OpenListTeam/OpenList/discussions/4572",
              type: "primary",
            },
            {
              text: "Config",
              link: "/config/configuration",
              type: "primary",
            },
          ],
          showOnce: true,
        },
        {
          path: "/zh",
          title: '温馨提示',
          content: '<i class="fa-solid fa-light-emergency-on fa-bounce" style="color: #ff0000;"></i>&nbsp;<span style="color:rgb(255, 0, 0);font-weight:bold;">请仔细查看弹窗提示内容</span><br/><br/>0.<span style="color:red; font-weight:bold;">OpenList 正在紧锣密鼓筹备首个 Release，请关注我们！</span><br/><br/>1.OpenList v3.30.0 版本开始将不再支持Win7/Server2008，因为Go不支持了,<a href="https://github.com/golang/go/issues/64622">点击查看详细说明</a>.<br/><br/><span style="color:rgb(255, 0, 0);font-weight:bold;">2.添加云盘后请及时配置[防盗/元信息]等措施，防止被[爬虫/其他人]恶意[访问/分享]导致帐号被[冻结/禁用].</span></span>',
          actions: [
            {
              text: "阿里云open",
              link: "/zh/guide/drivers/aliyundrive_open",
              type: "primary",
            },
            {
              text: "GitHub",
              link: "https://github.com/OpenListTeam/OpenList",
              type: "primary",
            },
            {
              text: "配置",
              link: "/zh/config/configuration",
              type: "primary",
            },
          ],
          showOnce: true,
        },
      ],
    },
  },
  {
    custom: true,
  }
);
