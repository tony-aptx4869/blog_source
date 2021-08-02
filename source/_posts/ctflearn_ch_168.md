---
layout: post
title: CTFLearn | Wikipedia
date: 2021-08-02 10:20:00
description: 访问 `Wikipedia` ，搜索 `flag` ……
categories: 
  - CTF
  - CTFLearn
  - Miscellaneous
tags: 
  - CTF
  - Flag
  - CTFLearn
  - Miscellaneous
  - Wikipedia
---

题目源页面：[Wikipedia - CTFLearn](https://ctflearn.com/challenge/168)

题目如下：

{% blockquote Wikipedia - CTFLearn https://ctflearn.com/challenge/168 %}
Not much to go off here, but it’s all you need:
Wikipedia and 128.125.52.138.
{% endblockquote %}

---

访问 `Wikipedia` ，搜索 `flag` 。

打开的页面为 [Flag - Wikipedia](https://en.wikipedia.org/wiki/Flag)。

![ctflearn_ch168_01](https://aptx4869.tv/images/ctf/ctflearn/ch168/ch168_01.png)

在页面中点按 `View history` ，这时打开了页面 [Flag: Revision history - Wikipedia](https://en.wikipedia.org/w/index.php?title=Flag&action=history) 。点按 `Filter revisions` 展开搜索区，点按 `To date` 下方的文本框，将日期选定到 `Mon, 17 Aug 2015`（2015年8月17日），可以在结果中找到包含 `IP` 地址 `128.125.52.138` 的这一条记录。

![ctflearn_ch168_02](https://aptx4869.tv/images/ctf/ctflearn/ch168/ch168_02.png)

点按这条记录中的 `17:13, 17 August 2015` 字样，在打开的 [Flag - Wikipedia](https://en.wikipedia.org/w/index.php?title=Flag&oldid=676540540) 页面可以浏览到这一历史版本。

![ctflearn_ch168_03](https://aptx4869.tv/images/ctf/ctflearn/ch168/ch168_03.png)

点按 `Previous revision` 左侧的 `diff` ，在打开的 [Flag: Difference between revisions - Wikipedia](https://en.wikipedia.org/w/index.php?title=Flag&diff=prev&oldid=676540540) 页面可以看到这一历史版本相较上一历史版本做出了哪些修改。

![ctflearn_ch168_04](https://aptx4869.tv/images/ctf/ctflearn/ch168/ch168_04.png)

果不其然，`Flag` 就在这里。

``` text
In a certain CTF competition, the flag to acertain problem is
"cNi76bV2IVERlh97hP".
```

