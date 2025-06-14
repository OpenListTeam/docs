import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  // "/",
  { text: "Guide", icon: "iconfont icon-creative", link: "/guide/" },
  { text: "Config", icon: "iconfont icon-config", link: "/config/" },
  { text: "FAQ", icon: "iconfont icon-question", link: "/faq/" },
  { text: "Pricing", icon: "iconfont icon-tag", link: "/pricing" },
  { text: "Terms", icon: "iconfont icon-creative", link: "/terms" },
  { text: "Privacy", icon: "iconfont icon-creative", link: "/privacy" },
  // { text: "Tool", icon: "tool", link: "/tool/" },
  {
    text: "Community",
    icon: "iconfont icon-community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/OpenListTeam/OpenList/discussions",
      },
      { text: "Telegram", link: "https://t.me/+BYuDkV2f-ds2ODE1" },
      // { text: "Discord", link: "https://discord.gg/F4ymsH4xv2" },
    ],
  },
  // {
  //   text: "More",
  //   icon: "iconfont icon-more",
  //   children: [
  //     { text: "Demo", link: "https://alist.pages.dev/" },
  //     { text: "V2", link: "https://alist-doc.example.com" },
  //     { text: "Desktop", link: "https://ad.example.com/" },
  //   ],
  // },
  {
    text: "Github",
    icon: "iconfont icon-github",
    link: "https://github.com/OpenListTeam/OpenList",
  },
]);
