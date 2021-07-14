---
layout: post
title: macOS 更新 Command Line Tools (CLT)
date: 2021-07-13 17:23:23
description: 遇到错误信息：Your Command Line Tools (CLT) does not support macOS 11...
categories: 
  - macOS
  - CLT
tags: 
  - macOS
  - CLT
  - Xcode
  - zsh
---

在使用 `brew` 安装软件包时，遇到了报错信息。原来是 `Command Line Tools (CLT)` 版本过旧。

{% blockquote Tony Chang, macOS Terminal (zsh) %}
Your Command Line Tools (CLT) does not support macOS 11.
It is either outdated or was modified.
Please update your Command Line Tools (CLT) or delete it if no updates are available.
Update them from Software Update in System Preferences or run:
  softwareupdate --all --install --force

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/more/.
You should download the Command Line Tools for Xcode 12.5.
{% endblockquote %}


人性化的报错信息，把步骤都写明了。

先执行系统软件更新。

``` shell
softwareupdate --all --install --force
```

结果提示如下。

``` shell
Software Update Tool

Finding available software
No updates are available.
```

没有可用更新啊。那只好强行删除掉旧版本，重新安装新版本咯。

``` shell
sudo rm -rf /Library/Developer/CommandLineTools
sudo xcode-select --install
```

macOS 系统会弹出对话框，同意条款之后开始下载安装最新版本的 `Command Line Tools (CLT)`。

