# [Flow](https://flow.org/en/)

Flow 是 JavaScript 的静态类型检查器

## 安装

安装和配置项目的流程

### 安装编译器

首先，您需要配置一个编译器以剥离 Flow 类型。您可以在 Babel 和 flow-remove-types 之间进行选择。

这边以 Babel 为例：

Babel 是 JavaScript 代码的编译器，具有对 Flow 的支持。Babel 可以将关于 Flow 代码剔除。

首先安装@babel/core，@babel/cli 并@babel/preset-flow 使用 Yarn 或 npm。

```text
npm install --save-dev @babel/core @babel/cli @babel/preset-flow
```

接下来，你需要在你的项目的根文件下创建一个.babelrc。

```json
{
  "presets": ["@babel/preset-flow"]
}
```

剔除命令运行

```text
babel 输入需剔除的文件或文件夹路径 -d 输出文件夹
```

### 配置流程

安装 flow-bin

```text
npm install --save-dev flow-bin
```

将"flow"脚本添加到您的 package.json：

```json
{
  "scripts": {
    "flow": "flow"
  }
}
```

首次安装后，需要先初始化

```text
npm run flow init
```

init 之后，运行 flow

```text
npm run flow
```
