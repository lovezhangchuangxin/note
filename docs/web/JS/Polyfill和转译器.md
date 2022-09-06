# Polyfill 和转译器

::: details 参考资料

- [现代 JavaScript 教程：Polyfill 和转译器](https://zh.javascript.info/polyfills)
- [JavaScript 中的 shim 和 polyfill 是什么](https://blog.csdn.net/YeShenLiaoSuiFeng/article/details/79266911)
- [JavaScript 术语：shim 和 polyfill](https://www.dandelioncloud.cn/article/details/1506259417409613826)

:::

JavaScript 语言在稳步发展。也会定期出现一些对语言的新提议，它们会被分析讨论，如果认为有价值，就会被加入到 (https://tc39.github.io/ecma262/)[https://tc39.github.io/ecma262/] 的列表中，然后被加到 [ECMA 规范](http://www.ecma-international.org/publications/standards/Ecma-262.htm) 中。

然而，JavaScript 引擎背后的团队并不会立即实现标准中的全部内容，一个 JavaScript 引擎只能实现标准中的一部分是很常见的情况。

如何让我们现代的代码在还不支持最新特性的旧引擎上工作？Polyfill 和转译器应运而生。

## 转译器（Transpilers）

> 是一种可以将源码转译成另一种源码的特殊的工具。它可以解析（“阅读和理解”）现代代码，并使用旧的语法结构对其进行重写，进而使其也可以在旧的引擎中工作。

这处应联想到 [babel](https://www.babeljs.cn/docs/)

一个典型的例子：

```js
// 在运行转译器之前
height = height ?? 100;

// 在运行转译器之后
height = height !== undefined && height !== null ? height : 100;
```

在 ES2020 之前没有“空值合并运算符” ??。所以，如果访问者使用过时了的浏览器访问我们的网页，那么该浏览器可能就不明白 height = height ?? 100 这段代码的含义。

转译器会分析我们的代码，并将 height ?? 100 重写为 (height !== undefined && height !== null) ? height : 100。

## Polyfill

除了 polyfill，shim 这个词也经常被提及，我们来看它们的联系与区别。

shim 是一个库,它将一个新的 API 引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现

polyfill 就是一个 **用在浏览器 API** 上的 shim.我们通常的做法是先检查当前浏览器是否支持某个 API,如果不支持的话就加载对应的 polyfill.然后新旧浏览器就都可以使用这个 API 了.（注： 术语 polyfill 来自于一个家装产品 Polyfilla）

Polyfilla 是一个英国产品,在美国称之为 Spackling Paste(译者注:刮墙的,在中国称为腻子).记住这一点就行:把旧的浏览器想象成为一面有了裂缝的墙.这些[polyfills]会帮助我们把这面墙的裂缝抹平,还我们一个更好的光滑的墙壁(浏览器)

一个典型的例子是：

```js
if (!Math.trunc) {
  // 如果没有这个函数
  // 实现它
  Math.trunc = function (number) {
    // Math.ceil 和 Math.floor 甚至存在于上古年代的 JavaScript 引擎中
    // 在本教程的后续章节中会讲到它们
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

Math.trunc(n) 是一个“截断”数字小数部分的函数，例如 Math.trunc(1.23) 返回 1。

在一些（非常过时的）JavaScript 引擎中没有 Math.trunc 函数，所以这样的代码会执行失败。

更新/添加新函数的脚本被称为“polyfill”。它“填补”了空白并添加了缺失的实现。

对于这种特殊情况，Math.trunc 的 polyfill 是一个实现它的脚本

## 注意

Transpilers 和 polyfill 有区别，前者将现代的语法和运算符转换为旧环境所支持的版本，后者是补充或者更新现代的函数。
Babel 中同时实现了 Transpilers 和 polyfill
