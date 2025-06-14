---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 276
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
  - Official
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# GitHub Releases

:::tip
GitHub API rate limits: The primary rate limit for unauthenticated requests is 60 requests per hour. Making API requests using a personal access token counts toward your personal rate limit of 5,000 requests per hour.
:::

## Repo Structure

:::tabs#UrlTree
@tab 1

The simplest usage is to directly write `owner/repository`, only one can be filled in.

##### Input

``` 
OpenListTeam/OpenList
```

The effect is the same as the following:
``` 
/:openlistteam/openlist
```

@tab 2

Mount to a subdirectory, you can mount multiple repositories

##### Input

``` 
/openlist-gh:OpenListTeam/OpenList
/openlist-frontend-gh:OpenListTeam/OpenList-Frontend
```

The leading `/` can be omitted:

``` 
openlist-gh:OpenListTeam/OpenList
openlist-frontend-gh:openListteam/openlist-frontend
```

:::

<br/>



## Show README file

Off switch：
```
openlist/
├── openlist-linux-amd64.tar.gz
└── openlist-windows-amd64.zip
```

On switch：
```
openlist/
├── v3.41.0/
│   ├── openlist-linux-amd64.tar.gz
│   └── openlist-windows-amd64.zip
├── v3.40.0/
│   ├── openlist-linux-amd64.tar.gz
│   └── openlist-windows-amd64.zip
├── LICENSE
├── README.md
└── README_cn.md
```

If enabled, the total size and modification time of the folder will not be displayed.

<br/>



## Token

Required when accessing private repositories, and can also reduce the impact of rate limits.

Log in GitHub and visit: <https://github.com/settings/tokens>

<br/>



## Show all version

Off switch:
```
openlist/
├── openlist-linux-amd64.tar.gz
└── openlist-windows-amd64.zip
```

On switch：
```
openlist/
├── v3.41.0/
│   ├── openlist-linux-amd64.tar.gz
│   └── openlist-windows-amd64.zip
├── v3.40.0/
│   ├── openlist-linux-amd64.tar.gz
│   └── openlist-windows-amd64.zip
└── v3.39.4/
    ├── openlist-linux-amd64.tar.gz
    └── openlist-windows-amd64.zip
```

<br/>



## **Gh Proxy**

Used to speed up downloading

- Download the content of `Releases` and change it to **https://xxxx.com/https://github.com**

```bash title="Copy"
https://gh-proxy.com/github.com
```

```bash title="Copy"
https://ghfast.top/github.com
```

```bash title="Copy"
https://ghproxy.net/github.com
```





<br/>

### **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

