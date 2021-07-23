---
layout: post
title: App+1咯！免费的 macOS 菜单栏工具，轻松隐藏图标：Hidden Bar
date: 2021-07-16 13:27:59
description: 一拖、一点，菜单栏清爽多了……
categories: 
  - macOS
  - Apps
tags: 
  - macOS
  - App+1
  - 菜单栏
  - 隐藏
---

{% blockquote Dwarves Foundation https://github.com/dwarvesf/hidden dwarvesf/hidden %}
Hidden Bar lets you hide menu bar items to give your Mac a cleaner look.
Hidden Bar 帮您隐藏菜单栏图标，让您的 Mac 更清爽哟！（Tony Chang 倾情翻译）
{% endblockquote %}

---

每天使用 Mac 的你，一定安装了不少 App，随着 App 数量的增加，macOS 系统的菜单栏想必也被各种图标占领，你可能也想过，有没有一种小工具，把不常用的图标隐藏起来，看起来清清爽爽。

看看 [Julien Grand-Poisson(@bfishadow)](https://twitter.com/bfishadow/status/1210578945302659073) 怎么说：

{% blockquote Julien Grand-Poisson https://twitter.com/bfishadow/status/1210578945302659073 @bfishadow %}
一直不喜欢乱七八糟的 Menu 图标，之前都在用 Bartender 来管理。但升级 macOS Catalina 之后，它找我索取“全屏录制”权限，于是删了……
今天，发现了一个超级好用的替代品 👉 [Hidden Bar](https://github.com/dwarvesf/hidden)
{% endblockquote %}

---

![major_image](https://aptx4869.tv/images/macos/hidden_bar/screen1.png)

Hidden Bar 非常轻量，简洁的界面和方便的操作实现了隐藏菜单栏图标的需求。

运行 Hidden Bar，菜单栏上会出现一条分割线 ` | ` 和一个尖括号 ` > `。分割线 ` | ` 左侧是被隐藏的图标，简称为「隐藏区」，分割线 ` | ` 右侧则是长期显示的图标，简称为「显示区」。点按尖括号 ` > ` 用来控制「隐藏区」展开与否。

现在，就可以按住键盘上的 ` ⌘ command ` 键，按自己的喜好拖拽图标了，要隐藏的图就把它拖到分割线 ` | ` 左侧哦！

![tutorial](https://aptx4869.tv/images/macos/hidden_bar/tutorial.gif)

要提醒各位，这个小工具有一项「自动隐藏图标」的功能，默认是开启状态，默认时间是10秒。所以，为了方便操作，可以先右键单击分割线 ` | ` —— `偏好设置`，进入设置窗口，把这项功能关闭先。图标都拖动完毕了，再开启。

全局快捷键请自行设置。这里给出我的快捷键仅供参考：` ⌘ command ` + ` ⌥ option ` + ` L `。

话不多讲，从哪里下载安装呢？

1. [Mac App Store](https://apps.apple.com/cn/app/hidden-bar/id1452453066?mt=12)

2. 下载 `.dmg` 包手动安装：[dwarvesf/hidden Releases](https://github.com/dwarvesf/hidden/releases)

3. `brew cask` 安装方式

``` shell
brew cask install hiddenbar
```

![minor_image](https://aptx4869.tv/images/macos/hidden_bar/screen2.png)

