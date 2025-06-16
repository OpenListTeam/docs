---
# This is the icon of the page
icon: icon-park-outline:setting-web
# This control sidebar order
order: 3
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 网站设置

## **版本**

OpenList 的版本，只读。



## **Api地址**

> 在v3.0.2及之后被弃用，已经移至[site_url](./configuration.md#site-url)

你的 OpenList 的地址，比如 `https://pan.example.com`。这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能无法正常工作，比如

URL链接结尾请勿携带 `/` ,正确示例:heavy_check_mark::`https://pan.example.com`，错误示例：`https://pan.example.com/`:x:,否则将无法使用以下功能

- 本地存储的缩略图
- 开启web代理后的预览
- 开启web代理后的下载地址
- 反向代理至二级目录
- ...



## **基本路径**

> 在v3.0.2及之后被弃用，已经移至[site_url](./configuration.md#site-url)

默认 `/`，如果你想反向代理子目录，详见[带有子目录的反向代理](../faq/howto.md#how-to-reverse-proxy-with-sub-directory)，需要设置该字段为 OpenList，比如 `https://pan.example.com/alist`，同时需要设置 `Api url` 为 `https://pan.example.com/alist`。



## **网站标题**

OpenList 的标题，例如 OpenList。



## **公告**

OpenList的公告，如 `### Hello\nWelcome to use Alist`。我们建议您在内容前添加标题，例如 `### Hello`，以免内容被关闭按钮覆盖。

- 如想不显示，可以清空公告内内容即可不显示。

如果嫌右上角的 `x` 按钮碍事可以使用如下CSS去掉

```css
<style>
.notify-render .hope-close-button {
    display: none;
}
</style>
```

## **分页类型**

- 全部：一次显示所有文件。
- 分页：在页面底部显示一个“分页器”。
- 加载更多：在页面底部显示“加载更多”按钮。
- 自动加载更多：滚动到页面底部时自动加载更多文件。



## **默认每页文件数量**

OpenList 的默认每页文件数量，当 `Pagination type` 没有被设置为 `All` 时生效，例如 `20`。



## **允许索引**

是否允许其他人挂载你的OpenList后进行索引构建，勾选后开启。

**默认为关闭状态，谨慎使用。** （v3.8.0 新增功能）



## **允许挂载**

是否允许其他人挂载你的OpenList,然后进行访问

**默认为开启状态，建议不想让别人挂载的选择关闭**（v3.16.3新增功能）



## **Robots.txt**

爬虫的配置/规则

默认的是允许爬虫访问所有页面

- `Allow: /` 表示允许搜索引擎的爬虫访问所有页面

```txt{2}
User-agent: *
Allow: /
```

如果想禁止爬虫访问所有页面就改成这样子

```txt{2}
User-agent: *
Disallow: /
```

