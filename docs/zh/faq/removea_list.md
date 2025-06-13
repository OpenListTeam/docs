---
# This is the title of the article
title: 移除原Alist的API授权
# This is the icon of the page
icon: iconfont icon-study
# This control sidebar order
order: 4
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
  - API
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

## **为什么要移除过去的Alist API**
由于原作者提供的 API 服务 `alist.nn.ci` 并未开源, 可能已被第三方控制, 导致机密信息泄露, 如有顾虑请考虑解除授权或重新登陆

## 速览各网盘解除授权方式

- 百度网盘App - 我的 - 设置 - 帐号管理 - 授权管理 - Alist - 解除授权
- 阿里云盘 - 我的 - 右上齿轮 - 隐私设置 - 授权管理 - Alist - 解除授权
- 115APP- 生活 下滑 -账号与安全 - 多端登录管理 - 第三方登录
- 联通云盘 - 在网页查询登录账号 - 以后建议 按照 教程抓包登录
- 一刻相册 （待补充）
- OneDrive 解除授权 https://account.live.com/consent/Manage

## **解除过程**

> 由于编者精力有限，无法对各平台一一截取详细流程，欢迎各位热心网友前往 [OpenList-issue#44](https://github.com/OpenListTeam/OpenList/issues/44) 提供你的解除授权流程截图
> 对截图贡献者建议注册小号，使用原Alist API绑定测试，规避可能风险

:::tabs#remove_alist
@tab 阿里云盘

1. 登陆阿里云盘
2. 访问链接 https://www.alipan.com/o/oauth/auth-list 
   <img src="/img/faq/remove/aliyun/aliyun_remove1.png" style="zoom:50%;" />
3. 在 “**已授权的云服务**” 中找到 Alist，点击进入后点击 “**解除授权**”
   <img src="/img/faq/remove/aliyun/aliyun_remove2.png" style="zoom:50%;" />
4. 解除成功
   <img src="/img/faq/remove/aliyun/aliyun_remove3.png" style="zoom:70%;" />

@tab 百度网盘

1. 登陆百度网盘
2. 访问链接 https://passport.baidu.com/v6/appAuthority
   <img src="/img/faq/remove/baidu/baidu_remove1.png" style="zoom:50%;" />
3. 在授权管理中找到 Alist（编写本段时Alist被D了，这里演示为OpenList），点击进入后点击 “**解除授权**”
   <img src="/img/faq/remove/baidu/baidu_remove2.png" style="zoom:50%;" />
4. 解除成功
