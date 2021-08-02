---
layout: post
title: CTFLearn | POST Practice
date: 2021-08-02 10:00:00
description: 根据题目极为明显的「暗示」，这道题就是要用 `POST` 方式发送 `HTTP` 请求……
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

题目源页面：[POST Practice - CTFLearn](https://ctflearn.com/challenge/114)

题目如下：

{% blockquote POST Practice https://ctflearn.com/challenge/114 %}
This website requires authentication, via POST. However, it seems as if someone has defaced our site. Maybe there is still some way to authenticate? http://165.227.106.113/post.php
{% endblockquote %}

---

根据题目极为明显的「暗示」，这道题就是要用 `POST` 方式发送 `HTTP` 请求。

题目说这网站通过 `POST` 身份验证鉴权，貌似有人破坏了这网站。也许还有方法可以进行身份验证。权且先直接访问这个链接，检查返回信息。如下图。

这里推荐我常用的：[在线HTTP POST GET接口测试请求工具- PostJson](http://coolaf.com/tool/post)。

![ctflearn_ch114_01](https://aptx4869.tv/images/ctf/ctflearn/ch114/ch114_01.png)

图中返回的信息是这样：

``` text
<h1>This site takes POST data that you have not submitted!</h1><!-- username: admin | password: 71urlkufpsdnlkadsf -->
```

这也太直白了吧？直接「暗示」了 `POST` 数据里应当包括给出的 `username` 和 `password` 信息。OK，那就在请求的 `Body` 中添加这两项 `Key/Value` 信息。再次访问如下图。

![ctflearn_ch114_02](https://aptx4869.tv/images/ctf/ctflearn/ch114/ch114_02.png)

`Flag` 终于出来了：

``` text
<h1>flag{p0st_d4t4_4ll_d4y}</h1>
```

