---
title: 插件模板
icon: lucide:book-dashed
description: bykcli插件的代码结构
---

## 项目结构

::code-tree{defaultValue="src/my_plugin/main.py" title="bykcli plugin"}

```py [src/my_plugin/__init__.py]
# 空文件或包初始化代码
```

```py [src/my_plugin/main.py]
import click

@click.command(help="我的自定义命令")
def hello():
    click.echo("Hello World")

# 入口文件，必须包含 register 函数
def register(cli: click.Group):
    cli.add_command(hello)
```

```toml [pyproject.toml]
[build-system]
requires = ["setuptools >= 61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "my-plugin"
version = "0.1.0"
description = "bykcli plugin"
requires-python = ">=3.10"

[project.entry-points."bykcli.plugins"]
my-plugin = "my_plugin.main:register"
```

```text [.gitignore]
__pycache__/
*.pyc
*.egg-info/
dist/
build/
```

::

## 插件注册机制

bykcli 支持两种插件类型：

### 内置插件

内置插件位于 `bykcli/plugins/` 目录下，系统启动时自动扫描该目录下的所有子模块。

每个内置插件需要满足：
- 包含 `command.py` 文件，定义 Click 命令
- 提供 `register(cli: click.Group)` 函数用于注册命令

```py [bykcli/plugins/paths/command.py]
def register(cli: click.Group) -> None:
    """注册命令。"""
    cli.add_command(paths)
```

### 外部插件

外部插件通过 Python 入口点（entry points）机制注册：

```toml [pyproject.toml] icon=vscode-icons:file-type-toml
# ...其他内容

[project.entry-points."bykcli.plugins"]
my-plugin = "my_plugin.main:register"
```

- bykcli 启动时会自动扫描 `bykcli.plugins` 入口点组
- 加载每个入口点对应的模块
- 执行 `register` 回调函数，将命令注册到主 CLI

::alert{icon="lucide:info"}
  插件的 `register` 函数接收一个 `click.Group` 对象，通过 `cli.add_command()` 添加自定义命令
::