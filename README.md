
# Quickstart 快速开始

## 环境准备
- [node.js](https://nodejs.org/en) 或者使用 [nvm](https://github.com/nvm-sh/nvm)
- [微信小程序开发工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [Visual Studio Code](https://code.visualstudio.com/) 或 [WebStorm](https://www.jetbrains.com/zh-cn/webstorm/download/#section=mac)

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```


### VsCode
clone 当前项目并使用 `vscode` 打开, 查看左侧插件面板并安装推荐插件

### WebStorm
安装 [小程序插件](https://gitee.com/zxy_c/wechat-miniprogram-plugin#wechat-miniprogram-plugin)
打开 Settings -> File Watchers -> 导入 当前项目下的 watchers.xml
当然也不要忘了打开对应几个 watchers 的 Actions on Save


## 项目结构

```
.
├── wxpackup.config.js                  # wxpackup 配置文件
├── package.json                        # 项目依赖, 脚本配置
├── project.config.json                 # 小程序项目配置文件
├── project.private.config.json         # 小程序项目私有配置文件。此文件中的内容将覆盖
├── tsconfig.json                       # TypeScript 配置文件
├── .env                                # [可选?] 不同环境对应的 dotenv 文件
│   ├── .env                            # tips: 所有情况下都会加载
│   └── .env.local                      # tips: 指定 `--env=local` 的情况下都会加载, 并覆盖 `.env` 中的属性
├── .keystore                           # [可选?] 用户上传秘钥文件夹
│   └── private.${appid}.key
├── scripts                             # [可选?] 用户自定义脚本文件夹, 目前来说, 提供了一下三个钩子
│   ├── beforeCompile.ts                # [可选?] 编译前预处理
│   ├── beforePreview.ts                # [可选?] 预览前预处理
│   └── beforeUpload.ts                 # [可选?] 上传前预处理
├── src                                 # 小程序源码文件夹
│   ├── app.json                        # 小程序全局配置
│   ├── app.less                        # 小程序全局样式
│   ├── app.ts                          # 小程序入口文件
│   ├── components                      # [约定] 公共组件文件夹
│   ├── env.ts                          # [生成] wxpackup 自动生成, 不要手动写
│   ├── lib                             # [约定] 三方库, 不经过babel编译的
│   ├── packages                        # [约定] 分包文件夹
│   ├── pages                           # 小程序页面文件夹
│   └── utils                           # [约定] 公共工具函数
├── typings                             # 小程序类型文件, 不太用关注
├── .rome.json                          # [IDE插件] js/ts 格式化配置
├── .stylelintrc.js                     # [IDE插件] less/css 格式化配置
└── .vscode                             # [IDE插件] vscode 项目的编辑器配置, 用来指定一些格式化和插件配置

```

## 一点科普

在我们的项目中, 分别使用下列工具所对应的 `vscode` 插件在保存文件的时候来自动完成格式化&语法自动修复.


| 文件类型 | 格式化工具 | 配置文件 |
| --- | --- | --- |
| js/ts | [rome](https://rome.tools/) | rome.json |
| css/less | [stylelint](https://stylelint.io/) | stylelintrc.js |
| wxml | [WXML - Language Service]() | .vscode/settings.json |


- formatter 格式化
行末是否有有分好, 标签是否单独折行等等, 让代码看起来更漂亮, 风格统一;

- linter 语法建议/校验
进行静态语法检查, 指出语法错误, 甚至能够给出部分优化方案;

- autofix 自动修复 & quick fix 快速修复
formatter 和 linter 都要一些相对简单的问题可以做到自动修复, 在当前项目设置中  `.vscode/settings.json`
可以查看具体配置, 一些 lint 有多个解决方案, 那么可以通过 `快速修复` 这一编辑器命令(默认快捷键 `cmd +.` ), 来唤起快速修复菜单选择修复方案

> 自己试试:
- 1. 编辑调整 `src/utils/utils.ts` 文件
- 2. 在 `index.ts` 添加方法, 在紧邻的 `index.wxml` 的 `view` 标签键入 `bind` 看是否有代码提示
- 3. `wxml` 中找到类似 `bind:tap="xxx"` 类型的, `cmd+鼠标左键` 查看是否正确跳转


## 工作流程
使用 `vscode` 进行代码编辑, 使用 `微信小程序开发工具` 进行模拟预览与debug

1. 使用 `vscode` 打开当前项目
2. 使用 `微信小程序开发工具` 打开当前项目
3. 在 `vscode` 中, 修改 `src/pages/index/index.wxml` 中的文字, 查看微信小程序模拟器中变化
4. 使用 `微信小程序开发工具` 进行debug, 详见下方视频



## 为什么?
- Q: 不用 `微信小程序开发工具` 自带编辑器?
- A: 本来就是一个内嵌的阉割版vscode, 格式化支持很弱, 插件支持也有限制, 总之辣鸡


## 项目配置进阶
[wxpackup](https://github.com/charlzyx/wxpackup)

## 相关文档
- [微信官方文档·小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/)
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
