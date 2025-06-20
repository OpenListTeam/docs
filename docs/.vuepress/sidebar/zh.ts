import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/guide/": "structure",
  "/zh/config/": "structure",
  "/zh/faq/": "structure",
  "/zh/tool/": false,
  "/zh/": [
    "",
    {
      text: "使用指南",
      prefix: "guide/",
      children: ["api/", "install/", "drivers/", "advanced/"],
    },
    {
      text: "配置",
      prefix: "config/",
      children: [
        "config",
      ],
    },
    {
      text: "常见问题",
      prefix: "faq/",
      children: ["howto", "why"],
    },
  ],
});
