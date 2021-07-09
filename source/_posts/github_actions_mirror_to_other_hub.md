---
layout: post
title: GitHub Actions妙用：自动镜像同步到其他hub
date: 2021-07-06 16:48:16
description: Gitee仓库页面有同步按钮，但需要手动去点……GitHub可以配置WebHook，但需要一台服务器……于是我想到了GitHub Actions……
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

## 引言

我的代码托管在 [GitHub](https://github.com)，我希望把 GitHub 的某（或某些、或全部）仓库镜像同步到 [Gitee](https://gitee.com) 和 [GitLab](https://gitlab.com) 上。不仅是为了异地容灾，同时也可以更多地 show my code。

## 环境

本文叙述基于如下系统和软件环境。

- macOS Big Sur 11.4
- Visual Studio Code v1.57.1 (macOS)
- VIM v8.2 (macOS version)
- zsh 5.8 (x86_64-apple-darwin20.1.0)

## 思绪

在 Gitee 某个仓库管理里设置了「仓库远程地址(用于强制同步)」之后，该仓库页面上会显示一个同步按钮，但是需要人工手动去点，实在是不友好。而 GitLab 仓库设置里则有「镜像同步」的设置，添加一个从其他仓库拉取（`pull`）的规则之后，貌似会定期拉取，这个放入备选方案中。

GitHub 仓库可以配置 `WebHook`，通过这种方式通知服务程序，触发服务程序去镜像同步仓库，但这种方式需要部署一台服务器。达咩达咩！

机智的我想到了 `GitHub Actions` 功能，这个太棒了，可以设置在 `push`、`pull request` 之后自动运行，也可以设置schedule定时自动运行。

那就实现一下吧！

## 实现

首先，要搞清楚，对于 GitHub、GitLab、Gitee 来说，如果要提交代码的话，可以通过HTTPS和SSH两种方式。HTTPS 方式需要使用用户名+密码登录，SSH 则只需要配置好公钥和密钥就可以「免密通行」啦。

我们接下来要做的，首先要生成一对公钥和密钥，然后把公钥交给 GitLab 和 Gitee ，把密钥配置到GitHub仓库中，并在 `GitHub Actions` 脚本中使用。这样，在向 GitLab 和 Gitee 镜像同步仓库的时候，就可以免密码了。

### 生成 SSH 公玥和密钥

使用 `ssh-keygen` 命令来生成公玥和密钥。更详细的说明请参阅《[SSH 公钥和密钥创建大法](https://aptx4869.tv/2021/07/06/ssh_key_generate)》。

``` shell
ssh-keygen -t rsa
```

### 把公钥配置到 GitLab 和 Gitee

首先要拷贝公钥文件 `id_rsa.pub` 的内容，可以使用 `vim`、`gedit`、`Visual Studio Code` 等文本编辑器或者IDE。

#### GitLab

##### 进入 SSH Keys 页面

在 GitLab 网页上，点击右上角用户头像，在弹出菜单中点击 `Preferences`。

![GitLab_01](https://aptx4869.tv/images/github_gitlab_gitee/20210706191453.png)

随后在左边一列中点击 `SSH Keys`，即可进入 `SSH Keys` 页面。

![GitLab_02](https://aptx4869.tv/images/github_gitlab_gitee/20210706192357.png)

##### 粘贴公钥文件 `id_rsa.pub` 的内容

在 `Key` 处大文本框中，粘贴公钥文件 `id_rsa.pub` 的内容，在 `Title` 处填入名称，便于自己识别。`Expires at` 处为过期日期，我这里不填写，不填写则为永久有效。

![GitLab_03](https://aptx4869.tv/images/github_gitlab_gitee/20210706192813.png)

填写完毕后，点击 `Add Key` 按钮。

##### 确认配置成功

页面会显示出刚刚添加的公钥内容。

![GitLab_04](https://aptx4869.tv/images/github_gitlab_gitee/20210706194146.png)

`Created on` 处的时间是 UTC 时间，请不要介意。

OK，在 GitLab 上配置好了公钥。

#### Gitee

##### 进入 SSH公钥 页面

在 Gitee 网页上，点击右上角用户头像，在弹出菜单中点击 `设置`。

![Gitee_01](https://aptx4869.tv/images/github_gitlab_gitee/20210706194423.png)

随后在左边一列中点击 `SSH公钥`，即可进入 `SSH公钥` 页面。

![Gitee_02](https://aptx4869.tv/images/github_gitlab_gitee/20210706194647.png)

##### 粘贴公钥文件 `id_rsa.pub` 的内容

在 `标题` 处填入名称，便于自己识别，在 `公钥` 处大文本框中，粘贴公钥文件 `id_rsa.pub` 的内容。

![Gitee_03](https://aptx4869.tv/images/github_gitlab_gitee/20210706194906.png)

填写完毕后，点击 `确定` 按钮。网页弹出对话框，要求验证用户密码。

![Gitee_04](https://aptx4869.tv/images/github_gitlab_gitee/20210706195002.png)

输入用户密码之后，点击 `验证` 按钮。

##### 确认配置成功

页面会提示添加成功，并显示出刚刚添加的公钥的 `SHA256` 校验信息。

![GitLab_05](https://aptx4869.tv/images/github_gitlab_gitee/20210706195150.png)

OK，在 Gitee 上配置好了公钥。

### 把私钥配置到 GitHub 仓库

作为镜像源的 GitHub 仓库，要配置私钥，以支撑 GitHub Actions 脚本向 GitLab 和 Gitee 进行镜像同步的操作。

## ** To be continue... **
