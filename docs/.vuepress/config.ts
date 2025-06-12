import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  theme,
  base: "/docs/", // For Github Pages
  head: [
    [
      "link",
      {
        type: "text/css",
        rel: "stylesheet",
        href: "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",
        media: "all"
      }
    ],
    [
      "link",
      {
        href: "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
        rel: "stylesheet"
      }
    ],
    [
      "script",
      {},
      `!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JopjiIsNYEbnNVF2",ck:"JopjiIsNYEbnNVF2",hashMode:false});`,
    ],
    // [
    //   "script",
    //   {},
    //   `var _hmt = _hmt || [];
    //   (function() {
    //     var hm = document.createElement("script");
    //     hm.src = "https://hm.baidu.com/hm.js?6c8a68035d2804b5cfeafe6d96df4c75";
    //     var s = document.getElementsByTagName("script")[0]; 
    //     s.parentNode.insertBefore(hm, s);
    //   })();`,
    // ],
    // [
    //   "script",
    //   {
    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6488351372249466",
    //     async: true,
    //     crossorigin: "anonymous",
    //   },
    // ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "OpenList Docs",
      description: "Documentation for OpenList v3",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "OpenList 文档",
      description: "OpenList v3 的文档",
    },
  },
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6]
    }
  },
  plugins: [

  ],
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ["naive-ui"],
      },
    },
  }),
  alias: {
    "@theme-hope/components/NormalPage": path.resolve(
      __dirname,
      "./components/NormalPage.vue"
    ),
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
    "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
      __dirname,
      "./components/Sidebar.vue"
    ),
    "@Onedrive/Request": path.resolve(
      __dirname,
      "./components/onedrive/Request.vue"
    ),
    "@Onedrive/Callback": path.resolve(
      __dirname,
      "./components/onedrive/Callback.vue"
    ),
    "@Onedrive/WebDav": path.resolve(
      __dirname,
      "./components/onedrive/WebDav.vue"
    ),
    "@Baidu/Callback": path.resolve(
      __dirname,
      "./components/baidu/Callback.vue"
    ),
    "@Yandex/Callback": path.resolve(
      __dirname,
      "./components/yandex/Callback.vue"
    ),
    "@Google/Request": path.resolve(
      __dirname,
      "./components/google/Request.vue"
    ),
    "@Google/Callback": path.resolve(
      __dirname,
      "./components/google/Callback.vue"
    ),
    "@Google/Album": path.resolve(__dirname, "./components/google/Album.vue"),
    "@Aliyundrive/Request": path.resolve(
      __dirname,
      "./components/aliyundrive/Request.vue"
    ),
    "@Aliyundrive/Callback": path.resolve(
      __dirname,
      "./components/aliyundrive/Callback.vue"
    ),
    "@Wopan/Token": path.resolve(__dirname, "./components/wopan/Token.vue"),
    "@Pricing": path.resolve(__dirname, "./components/Pricing.vue"),
    "@Desktop": path.resolve(__dirname, "./components/Desktop.vue"),
    "@Changelog": path.resolve(__dirname, "./components/changelog/index.vue"),
    "@Api": path.resolve(__dirname, "./components/api/index.ts"),
    "@Dropbox/Request": path.resolve(
      __dirname,
      "./components/dropbox/Request.vue"
    ),
    "@Dropbox/Callback": path.resolve(
      __dirname,
      "./components/dropbox/Callback.vue"
    ),
    "@115/Token": path.resolve(__dirname, "./components/115/Token.vue"),
  },
});
