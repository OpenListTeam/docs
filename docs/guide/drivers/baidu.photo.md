---
# This is the icon of the page
icon: /img/storegeico/photo.baidu.com.ico
# This control sidebar order
order: 76
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Moment album

## **Cookie** <Badge text="v3.41.0" type="info" vertical="middle" />

Log in [Yike Photo Album](https://photo.baidu.com) Open F12 and find a request carrying a `Cookie` value and copy it

![](/img/drivers/baidu/yike_cookie.png)

 

<br/>

## **Album_id**

- **When the default is empty, all albums in the root directory will be displayed directly.**
- If you want to mount a single album, you need to fill in the following content

- album_id should be filled in: {album_id}|{tid} Example: 4021858707431029901|316519298447849660

- {album_id} : After entering the album you need to mount, the ID after viewing the top link /album is {album_id}

  - https://photo.baidu.com/photo/web/album/4021858707431029901 
  - **4021858707431029901** is {album_id}

- {tid}: Visit **https://photo.baidu.com/youai/album/v1/list?limit=1000** to get it.
  - After entering the interface, `Ctrl+F` searches for the ID above, and you can see the corresponding {tid} in the following lines

<br/>



## **Display type** 

Choose according to your needs



<br/>

## **Delete origin**

<i class="fa-solid fa-triangle-exclamation fa-lg" style="color: #ff0000;"></i>‪‪ ‪ By default, it just removes the album, not the real deletion. If you enable this option to delete the file, it will be completely deleted. Please enable it carefully.



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
