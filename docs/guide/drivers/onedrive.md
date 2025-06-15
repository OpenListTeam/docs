---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 36
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
headerDepth: 5
---

# OneDrive / Share

<br/>

## **OneDrive mount**

:::tip
If your account does not support the API, (for example, the school account has not verified the administrator, or the administrator has disabled the API), then you can also mount it through webdav. For details, see [webdav](webdav.md)
:::

First open https://api.oplist.org/

### **Create an application**
> You can also choose to skip this step and use the client provided by default, but requires the approval of the organization administrator.

- On the page that opens, select the region and click Create Application
- After logging in, select `Register Application`, enter `Name`, and select `Accounts and Individuals in Any Organization Directory` (note that you don't look at the location selection but the text here. Some people may be the middle option, don't select a single Tenant or other options, otherwise it will cause problems when logging in), enter the redirect URL as <https://api.oplist.org/onedrive/callback>, `register`, and then you can get client_id
  ![client_id](/img/drivers/onedrive-register-app.png)
- After registering the application, select `Certificate and Password`, click `New Client Password`, enter a string of passwords, select the one with the longest time, and click `Add`
  (Note: The password entered after adding will disappear, please record the value of client_secret)
  ![client_secret](/img/drivers/onedrive-new-password.png)
- Select `API Permissions`, click `MicroSoft Graph`, enter file in the `Select Permissions`, and check `Files.read` (Note: Files.read is a read-only minimum permission. The permission in the figure is larger, and the same can be done ), click `Update Permission`
  ![api](/img/drivers/onedrive-update-permission.png)
### **Get refresh token**
Fill in the client_id and client_secret obtained in the previous step into the https://alist.example.com/tool/onedrive/request page, click Get Refresh Token, you can get the refresh token

### **Get Sharepoint site_id**
If you need to mount Sharepoint, after completing the previous step, an input site address will appear on the interface that displays the refresh token. After entering the site address, click Get site_id.
### **Add storage**
Fill in the values ​​obtained in the above process one by one.
### **Root folder path**
The default is `/`, if you need to customize, just fill in the path, starting from the root path, the same as the local path, such as `/test`



#### **The default download method used**

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

<br/>



## **Onedrive Share Url**

![api](/img/drivers/onedrive_app/od_share_add.png)

<br/>



### **Url**

The sharing link is the same as the example below and can be mounted. It can be obtained from E3, E5, A1, and A1P.

```html
https://connecthkuhk-my.sharepoint.com/:f:/g/personal/jhyang13_connect_hku_hk/EsEgHtGOWbJImxop6tF15FIBIH-ihrjuDclbrbmwWfY_RA?e=s6fitN
```

If it is OneDrive personal version, it will not work. The link is as follows

```html
https://onedrive.live.com/?cid=64EA5FCC7735E8C6&id=64EA5FCC7735E8C6%2117289
```

<br/>



### **Password**

It is the extraction code. If you have it, write it. If you don’t have it, don’t fill it in.



<br/>

#### **The default download method used**


```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[local proxy]:::someclass==default===>a2[user equipment]
    classDef someclass fill:#f96
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```