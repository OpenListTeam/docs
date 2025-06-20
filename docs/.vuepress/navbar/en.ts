import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  // "/",
  { text: "Guide", icon: "flowbite:lightbulb-solid", link: "/guide/" },
  { text: "Config", icon: "fa6-solid:gears", link: "/config/" },
  { text: "FAQ", icon: "zondicons:question", link: "/faq/" },
  { text: "Pricing", icon: "icomoon-free:price-tags", link: "/pricing" },
//  { text: "Terms", icon: "iconfont icon-creative", link: "/terms" },
//  { text: "Privacy", icon: "iconfont icon-creative", link: "/privacy" },
  // { text: "Tool", icon: "tool", link: "/tool/" },
  {
    text: "Community",
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
