import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/guide/": "structure",
  "/config/": "structure",
  "/faq/": "structure",
  "/tool/": false,
  "/": [
    "",
    {
      text: "Guide",
      prefix: "guide/",
      children: ["api/","install/", "drivers/", "advanced/"],
    },
    {
      text: "Config",
      prefix: "config/",
      children: ["", "configuration"],
    },
    {
      text: "FAQ",
      prefix: "faq/",
      children: ["howto", "why"],
    },
  ],
});
