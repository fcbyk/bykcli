---
title: Paths
icon: lucide:map-pin
description: 内置插件，用于查看文件路径
---

### 查看全局路径信息

::stack
```bash
byk paths
```
```bash
# 终端输出
CLI Home: /Users/coke/.bykcli
Alias File: /Users/coke/.bykcli/config/alias.byk.json
Logs Directory: /Users/coke/.bykcli/logs
```
::


### 查看插件注册的路径

::stack
```bash
# 格式: byk paths <plugin>
byk paths lansend
```
```bash
# 终端输出
数据文件：~/.bykcli/plugins/lansend/state.json
```
::


::alert{to="/api/"}
  插件自己决定展示哪些路径项，以及每一项的 label<br/>
  如果你想了解插件如何注册paths，可以阅读 API 章节
::
