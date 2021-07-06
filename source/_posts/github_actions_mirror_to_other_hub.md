---
layout: post
title: GitHub Actions妙用：自动镜像同步到其他hub
date: 2021-07-06 16:48:16
description: Gitee页面提供了同步按钮，但需要手动去点……GitHub可以配置WebHook，但需要一台服务器……于是我想到了GitHub Actions……
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

# GitHub Actions妙用：自动镜像同步到其他hub

[GitHub](https://github.com)在国内的访问速度一直很慢，我考虑在[Gitee](https://gitee.com)上搞一搞镜像，把一些repo