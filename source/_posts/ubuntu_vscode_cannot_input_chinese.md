---
layout: post
title: Ubuntu商店VSCode无法输入中文
date: 2021-06-24 11:08:52
description: 首次进入系统，看到欢迎界面推荐安装VSCode，所以安装来体验下，却发现无法输入中文……
categories: 
  - Linux
  - Ubuntu
tags: 
  - ubuntu
  - vscode
  - linux
  - 中文
---
# Ubuntu商店VSCode无法输入中文

前几天在虚拟机装个Ubuntu，学习操作系统的知识。

首次进入系统，看到欢迎界面推荐安装VSCode，所以安装来体验下，却发现无法输入中文。

一开始以为是输入法的问题，在尝试换了ibus自带的中文输入法和基于fcitx的谷歌拼音、搜狗拼音之后，尤其是FireFox浏览器等软件内都正常，让我无比确信Ubuntu商店内的这个VSCode有问题。

通过伟大的谷歌得知，Ubuntu商店向导安装的VSCode是snap的删减版本，不支持中文。

所以，卸载，安装微软官方版本。

1. 卸载snap版本
```
sudo snap remove code
```

2. key和安装源
```
# 下载微软的key
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
# 把key注册到系统
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
# 添加微软安装源
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

3. 按照新的源更新包信息
```
sudo apt -y install apt-transport-https
sudo apt update
```

4. 安装
```
# Statable Version
sudo apt -y install code

# Insider Version
sudo apt -y install code-insiders
```

今后，通过apt命令更新和管理VSCode。
