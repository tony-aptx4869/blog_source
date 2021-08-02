---
layout: post
title: CTFLearn | Don't Bump Your Head(er)
date: 2021-08-02 10:10:10
description: 根据题目极为明显的「暗示」，基本上这道题就是要用到 `HTTP` 请求的 `Header`……
categories: 
  - CTF
  - CTFLearn
  - Web
tags: 
  - CTF
  - Flag
  - CTFLearn
  - Web
  - Header
  - POST
  - GET
---

题目源页面：[Don't Bump Your Head(er) - CTFLearn](https://ctflearn.com/challenge/109)

题目如下：

{% blockquote Don't Bump Your Head(er) https://ctflearn.com/challenge/109 %}
Try to bypass my security measure on this site! http://165.227.106.113/header.php
{% endblockquote %}

---

根据题目极为明显的「暗示」，基本上这道题就是要用到 `HTTP` 请求的 `Header`。

题目说要绕过作者站点设置的安全措施，权且先直接访问这个链接，检查返回信息。如下图。

这里推荐我常用的：[在线HTTP POST GET接口测试请求工具- PostJson](http://coolaf.com/tool/post)。

![ctflearn_ch109_01](https://aptx4869.tv/images/ctf/ctflearn/ch109/ch109_01.png)

图中返回的信息是这样：

``` text
Sorry, it seems as if your user agent is not correct, in order to access this website. The one you supplied is: Go-http-client/1.1
<!-- Sup3rS3cr3tAg3nt  -->
```

哦，原来是说我的 `User Agent` 是错误的（这里应理解为不符合网站的要求），OK，那我就按照它超级明显地「暗示」，在请求的 `Header` 中添加 `User-Agent` 一项并设置其值为 `Sup3rS3cr3tAg3nt`，再次访问试试。如下图。

![ctflearn_ch109_02](https://aptx4869.tv/images/ctf/ctflearn/ch109/ch109_02.png)

这一次返回信息是这样的：

``` text
Sorry, it seems as if you did not just come from the site, "awesomesauce.com".
<!-- Sup3rS3cr3tAg3nt  -->
```

嗯，虽说不提示 `User Agent` 错误了，但是他说我并不是从 `awesomesauce.com` 这个网站访问的，好的，在请求的 `Header` 中添加 `Referer` 一项并设置其值为 `awesomesauce.com`，再次访问如下图。

![ctflearn_ch109_03](https://aptx4869.tv/images/ctf/ctflearn/ch109/ch109_03.png)

这下 `Flag` 终于出来了：

``` text
Here is your flag: flag{did_this_m3ss_with_y0ur_h34d}
<!-- Sup3rS3cr3tAg3nt  -->
```

