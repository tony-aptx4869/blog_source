---
layout: post
title: CTFLearn | Taking LS
date: 2021-08-02 10:30:00
description: 访问 `Wikipedia` ，搜索 `flag` ……
categories: 
  - CTF
  - CTFLearn
  - Forensics
tags: 
  - CTF
  - Flag
  - CTFLearn
  - Forensics
  - Terminal
  - ls
---

题目源页面：[Taking LS - CTFLearn](https://ctflearn.com/challenge/103)

题目如下：

{% blockquote Taking LS - CTFLearn https://ctflearn.com/challenge/103 %}
Just take the Ls. Check out this zip file and I be the flag will remain hidden.
https://mega.nz/#!mCgBjZgB!_FtmAm8s_mpsHr7KWv8GYUzhbThNn0I8cHMBi4fJQp8
{% endblockquote %}

---

题目的文件使用了新西兰的 `MEGA` 网盘存储，为了方便国内的盆友们，我将副本上传至百度网盘，请参见 `附件` 一节。

题目中提到了 `ls` 命令，也提到了「隐藏」的字眼。先下载 `.zip` 压缩文件，解压缩，得到一个名为 `The Flag` 的目录，在操作系统的图形化界面下，只能看到该目录下面的一个 `.pdf` 文件。

![ctflearn_ch103_01](https://aptx4869.tv/images/ctf/ctflearn/ch103/ch103_01.png)

打开终端窗口，用如下命令进入到 `The Flag` 目录，并显示包含隐藏文件、目录在内的所有文件、目录。

``` shell
cd ctflearn/The\ Flag
ls -al
```

![ctflearn_ch103_02](https://aptx4869.tv/images/ctf/ctflearn/ch103/ch103_02.png)

这里有一个名为 `.ThePassword` 的目录，同样也进入并显示所有文件、目录。

``` shell
cd .ThePassword
ls -al
```

![ctflearn_ch103_03](https://aptx4869.tv/images/ctf/ctflearn/ch103/ch103_03.png)

看到了一个名为 `ThePassword.txt` 的文本文件，使用 `cat` 命令将其打印在终端窗口。

``` shell
cat ThePassword.txt
```

![ctflearn_ch103_04](https://aptx4869.tv/images/ctf/ctflearn/ch103/ch103_04.png)

看到了密码 `Im The Flag` ，将该密码复制，打开 `The Flag.pdf` 文件，在密码框中粘贴密码。

![ctflearn_ch103_05](https://aptx4869.tv/images/ctf/ctflearn/ch103/ch103_05.png)

粘贴密码之后，按回车，即可看到 `The Flag.pdf` 文件即有 `flag` 内容。

![ctflearn_ch103_06](https://aptx4869.tv/images/ctf/ctflearn/ch103/ch103_06.png)

要注意的是，`flag` 内容并非是以可选中、复制的文本形式存储的，要手动照着敲下来，或者使用 `OCR` 识别。

``` text
Here is the Flag: ABCTF{T3Rm1n4l_is_C00l}
```

`OCR` 识别绝非 100% 正确，我使用了 `Google OCR` 就多次将小写字母 `l` 识别成数字 `1` ，请一定注意 `OCR` 识别后的人工校验。

---

### 附件

![ctflearn_ch103_file_01](https://aptx4869.tv/images/ctf/ctflearn/ch103/ch103_file_01.png)

链接: [https://pan.baidu.com/s/1QpvlQL68eDnaSgK4gRVjvw](https://pan.baidu.com/s/1QpvlQL68eDnaSgK4gRVjvw) 提取码: wutr

``` text
链接: https://pan.baidu.com/s/1QpvlQL68eDnaSgK4gRVjvw 提取码: wutr 复制这段内容后打开百度网盘手机App，操作更方便哦 
--来自百度网盘超级会员v8的分享
```
