---
layout: post
title: 第一次，词云
date: 2021-07-01 16:16:16
description: 第一次接触词云，顺道测试一下甘特图。
categories: 
  - 工具
  - 词云
tags: 
  - 工具
  - 词云
  - 汉语
---
# 第一次，词云

![](https://aptx4869.tv/images/20210702144540.png)

<!-- more -->

今天习总书记在党成立一百周年大会上讲话，拿讲稿来生成词云。

使用[微思词云](https://mywis.cn/wordcloud)在线生成。

{% note warning %}
### 注意
网站自动分词不符合预期，个人做了少量调整。
形状中没有中国地图，我手动上传。
涉及政治问题，中国地图不发。
{% endnote %}

测试一下甘特图：

{% mermaid gantt %}
section       Section
Completed    :done,    des1, 2021-07-01, 2021-07-07
Active       :active,  des2, 2021-07-08, 3d
Parallel 1   :         des3, after des1, 1d
Parallel 2   :         des4, after des1, 1d
Parallel 3   :         des5, after des3, 1d
Parallel 4   :         des6, after des4, 1d
{% endmermaid %}



