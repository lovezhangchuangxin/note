(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{336:function(s,t,a){"use strict";a.r(t);var n=a(16),i=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-基本使用"}},[s._v("#")]),s._v(" Git 基本使用")]),s._v(" "),t("p",[s._v("Git 下载不必多说，在"),t("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://git-scm.com/"),t("OutboundLink")],1),s._v("下载安装即可。")]),s._v(" "),t("h2",{attrs:{id:"一-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-配置"}},[s._v("#")]),s._v(" 一.配置")]),s._v(" "),t("ol",[t("li",[s._v("全局配置用户名和邮箱")])]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangchuangxin"')]),s._v("\ngit config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2911331070@qq.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看配置")]),s._v("\ngit config --list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以直接查看某个配置项")]),s._v("\ngit config user.name\ngit config user.email\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("查看全局配置文件")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("vim ~/.gitconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("本地配置用户名和邮箱")])]),s._v(" "),t("p",[s._v("执行 "),t("code",[s._v("git init")]),s._v(" 命令后会初始化 git 仓库，这表示 git 开始管理你的项目。\n此时当前目录下会出现一个隐藏文件夹.git。.git 文件夹下的 config 文件则是项目的本地配置。")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类似全局配置，不要--global即可")]),s._v("\ngit config user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangchuangxin"')]),s._v("\ngit config user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2911331070@qq.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地配置")]),s._v("\nvim .git/config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("vim 的知识在次不多说，简要介绍一下怎么退出（初次使用 vim 时可能会遇到不会退出的尴尬）\n输入:q 或者 ZZ 即可退出")]),s._v(" "),t("p",[s._v("如果你电脑中配置了 vscode 的环境变量，使用 code .git/config 同样可以打开项目的本地配置文件")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("更改 Git 默认使用的文本编辑器")])]),s._v(" "),t("p",[s._v("Git 默认使用的文本编辑器一般可能会是 Vi 或者 Vim，你也可以更改为自己喜欢的编辑器")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git config --global core.editor code\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("差异分析工具")])]),s._v(" "),t("p",[s._v("还有一个比较常用的是，在解决合并冲突时使用哪种差异分析工具。比如要改用 vimdiff 的话")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git config --global merge.tool vimdiff\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("git 命令行窗口中内容太多想清理怎么办？输入 clear 命令或者使用快捷键 ctrl + l")])]),s._v(" "),t("h2",{attrs:{id:"基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),t("ul",[t("li",[s._v("git --version 查看 git 版本")]),s._v(" "),t("li",[s._v("git status 查看当前状态")])])])}),[],!1,null,null,null);t.default=i.exports}}]);