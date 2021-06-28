---
layout: post
title: Ubuntu商店VSCode无法输入中文
date: 2021-06-24 11:08:52
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

Ubuntu商店内的VSCode无法输入中文。

Ubuntu商店向导安装的VSCode是snap的削减版本，不支持中文。
解决方式是：卸载后重新安装官方版本。

具体方式

1. 卸载snap版本
```
sudo snap remove code
```

2. 下载key
```
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
```

3. 加入key到系统并注入官网地址
```
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

4. 更新获取VSCode信息
```
sudo apt -y install apt-transport-https
sudo apt update
```
5. 安装：
```
# Statable Version
sudo apt -y install code

# Insider Version
sudo apt -y install code-insiders
```

这样，以后就可以直接执行apt命令更新和管理code了。
