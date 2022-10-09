(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{338:function(t,a,s){"use strict";s.r(a);var n=s(16),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"polyfill-和转译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polyfill-和转译器"}},[t._v("#")]),t._v(" Polyfill 和转译器")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zh.javascript.info/polyfills",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代 JavaScript 教程：Polyfill 和转译器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/YeShenLiaoSuiFeng/article/details/79266911",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 中的 shim 和 polyfill 是什么"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.dandelioncloud.cn/article/details/1506259417409613826",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 术语：shim 和 polyfill"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("JavaScript 语言在稳步发展。也会定期出现一些对语言的新提议，它们会被分析讨论，如果认为有价值，就会被加入到 (https://tc39.github.io/ecma262/)[https://tc39.github.io/ecma262/] 的列表中，然后被加到 "),a("a",{attrs:{href:"http://www.ecma-international.org/publications/standards/Ecma-262.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMA 规范"),a("OutboundLink")],1),t._v(" 中。")]),t._v(" "),a("p",[t._v("然而，JavaScript 引擎背后的团队并不会立即实现标准中的全部内容，一个 JavaScript 引擎只能实现标准中的一部分是很常见的情况。")]),t._v(" "),a("p",[t._v("如何让我们现代的代码在还不支持最新特性的旧引擎上工作？Polyfill 和转译器应运而生。")]),t._v(" "),a("h2",{attrs:{id:"转译器-transpilers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转译器-transpilers"}},[t._v("#")]),t._v(" 转译器（Transpilers）")]),t._v(" "),a("blockquote",[a("p",[t._v("是一种可以将源码转译成另一种源码的特殊的工具。它可以解析（“阅读和理解”）现代代码，并使用旧的语法结构对其进行重写，进而使其也可以在旧的引擎中工作。")])]),t._v(" "),a("p",[t._v("这处应联想到 "),a("a",{attrs:{href:"https://www.babeljs.cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("一个典型的例子：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在运行转译器之前")]),t._v("\nheight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在运行转译器之后")]),t._v("\nheight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("在 ES2020 之前没有“空值合并运算符” ??。所以，如果访问者使用过时了的浏览器访问我们的网页，那么该浏览器可能就不明白 height = height ?? 100 这段代码的含义。")]),t._v(" "),a("p",[t._v("转译器会分析我们的代码，并将 height ?? 100 重写为 (height !== undefined && height !== null) ? height : 100。")]),t._v(" "),a("h2",{attrs:{id:"polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polyfill"}},[t._v("#")]),t._v(" Polyfill")]),t._v(" "),a("p",[t._v("除了 polyfill，shim 这个词也经常被提及，我们来看它们的联系与区别。")]),t._v(" "),a("p",[t._v("shim 是一个库,它将一个新的 API 引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现")]),t._v(" "),a("p",[t._v("polyfill 就是一个 "),a("strong",[t._v("用在浏览器 API")]),t._v(" 上的 shim.我们通常的做法是先检查当前浏览器是否支持某个 API,如果不支持的话就加载对应的 polyfill.然后新旧浏览器就都可以使用这个 API 了.（注： 术语 polyfill 来自于一个家装产品 Polyfilla）")]),t._v(" "),a("p",[t._v("Polyfilla 是一个英国产品,在美国称之为 Spackling Paste(译者注:刮墙的,在中国称为腻子).记住这一点就行:把旧的浏览器想象成为一面有了裂缝的墙.这些[polyfills]会帮助我们把这面墙的裂缝抹平,还我们一个更好的光滑的墙壁(浏览器)")]),t._v(" "),a("p",[t._v("一个典型的例子是：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trunc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没有这个函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现它")]),t._v("\n  Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("trunc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Math.ceil 和 Math.floor 甚至存在于上古年代的 JavaScript 引擎中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在本教程的后续章节中会讲到它们")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("Math.trunc(n) 是一个“截断”数字小数部分的函数，例如 Math.trunc(1.23) 返回 1。")]),t._v(" "),a("p",[t._v("在一些（非常过时的）JavaScript 引擎中没有 Math.trunc 函数，所以这样的代码会执行失败。")]),t._v(" "),a("p",[t._v("更新/添加新函数的脚本被称为“polyfill”。它“填补”了空白并添加了缺失的实现。")]),t._v(" "),a("p",[t._v("对于这种特殊情况，Math.trunc 的 polyfill 是一个实现它的脚本")]),t._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("p",[t._v("Transpilers 和 polyfill 有区别，前者将现代的语法和运算符转换为旧环境所支持的版本，后者是补充或者更新现代的函数。\nBabel 中同时实现了 Transpilers 和 polyfill")]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);