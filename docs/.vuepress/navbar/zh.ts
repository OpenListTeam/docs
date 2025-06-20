import { navbar } from "vuepress-theme-hope"

export const zh = navbar([
  // "/zh/",
  { text: "使用指南", icon: "flowbite:lightbulb-solid", link: "/zh/guide/" },
  { text: "配置", icon: "fa6-solid:gears", link: "/zh/config/" },
  { text: "常见问题", icon: "zondicons:question", link: "/zh/faq/" },
  { text: "定价", icon: "icomoon-free:price-tags", link: "/zh/pricing" },
//  { text: "使用条款", icon: "iconfont icon-creative", link: "/zh/terms" },
//  { text: "隐私政策", icon: "iconfont icon-creative", link: "/zh/privacy" },
  // { text: "工具", "iconfont icon-tool", link: "/tool/" },
  {
    text: "社区",
    icon: "fluent:comment-multiple-24-filled",
    children: [
      {
        text: "Discussion",
        icon: "mdi:discussion",
        link: "https://github.com/OpenListTeam/OpenList/discussions",
      },
      { 
        text: "Telegram", 
        icon: "ic:baseline-telegram",
        link: "https://t.me/+BYuDkV2f-ds2ODE1" 
      },
      // { text: "Discord", link: "https://discord.gg/F4ymsH4xv2" },
    ],
  },
  // {
  //   text: "更多",
  //   icon: "iconfont icon-more",
  //   children: [
  //     { text: "演示", link: "https://alist.pages.dev/" },
  //     { text: "V2", link: "https://alist-doc.example.com" },
  //     { text: "桌面版", link: "https://ad.example.com/" },
  //   ],
  // },
  {
    text: "Github",
    icon: "mdi:github",
    link: "https://github.com/OpenListTeam/OpenList",
  },
])
