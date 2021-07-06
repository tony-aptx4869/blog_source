---
layout: post
title: SSH 公钥和密钥创建大法
date: 2021-07-06 15:48:16
description: 既然 SSH 公钥和密钥的用处大大滴……
categories: 
  - Git
  - GitHub
tags: 
  - Git
  - GitHub
  - Actions
  - GitLab
  - Gitee
---

# SSH 公钥和密钥创建大法

无论是实现 SSH 免密登录，还是想要 `scp` 免密发送文件，还是 `git` 免密提交代码，都需要用到 SSH 公钥和密钥。既然 SSH 公钥和密钥的用处大大滴，我来介绍 SSH 公钥和密钥的生成方法。

## 简单科普 SSH 公钥和密钥

简单地科普一下 SSH 公钥和密钥。

SSH 公钥和密钥是一种认证机制，服务器用它来确认「你是你」。通过加密算法生成的一对公钥和密钥是相互对应的，一对一的关系，就是过去「一个锁头配一把钥匙」的关系。服务器方拿着公钥，这好比是「锁头」啊，用户方或者客户端方拿着密钥，好比是「钥匙」。「钥匙」能打开「锁头」，服务器就确认通过「你是你」。而这把「钥匙」带给人最直观的感受就是，使用起来不用输入密码（当然仅限于创建时没有给密钥文件设置密码的情况下，下文有介绍）。

{% note warning %}
### 请注意
同学们一定要保护好自己的密钥文件，不要轻易分享给他人！
{% endnote %}

## `ssh-keygen` 简介

`ssh-keygen` 命令用于为 SSH 生成、管理和转换认证密钥，它支持 `RSA` 和 `DSA` 两种认证密钥。

### **语法格式**

``` shell
ssh-keygen [参数]
```

### **常用参数**

参数 | 含义
- | -
-b | 指定密钥长度
-e | 读取openssh的私钥或者公钥文件
-f | 指定用来保存密钥的文件名
-t | 指定要创建的密钥类型
-C | 添加注释

## 生成 SSH 公钥和密钥

打开终端（Terminal），首先确认当前用户的 `home` 目录下有没有一个叫 `.ssh` 的目录，不存在的话请先创建，并赋予 `700` 的权限。

``` shell
cd ~
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

直接使用 `ssh-keygen` 命令，不带任何参数，生成一对默认的公玥和密钥。

``` shell
ssh-keygen
```

由于我们没有使用 `-f` 参数指定路径和文件名，程序会有如下提示。

``` shell
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/tony/.ssh/id_rsa):
```

直接敲回车，使用默认路径和文件名。程序又会有如下提示，询问是否为密钥文件设置密码。

``` shell
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

我们为了免密使用密钥，对于这两条提示都直接敲空格。如果有特殊的用途需要设置密码，请一定自己设置并记好。程序会提示如下，表明公钥和密钥文件已经创建完成。

``` shell
Your identification has been saved in /Users/tony/.ssh/id_rsa.
Your public key has been saved in /Users/tony/.ssh/id_rsa.pub.
The key fingerprint is:
……(此处省略内容视实际情况)
```

`id_rsa` 文件即是密钥文件，`id_rsa.pub` 即是公钥文件。

从这个示例来看，不带任何参数的情况下，`ssh-keygen` 会默认生成一对 `RSA` 类型的公钥和密钥。

如果不放心，可以使用 `-t` 参数手动指定生成 `RSA` 类型的公钥和密钥。

``` shell
ssh-keygen -t rsa
```

## 其他示例

使用 `-t` 参数手动指定生成 `RSA` 类型的公钥和密钥，并使用 `-C` 参数添加注释，例如邮箱地址：

``` shell
ssh-keygen -t rsa -C "your_email_address@example.com"
```

使用 `-e` 参数读取openssh的私钥或者公钥文件：

``` shell
ssh-keygen -e
```
