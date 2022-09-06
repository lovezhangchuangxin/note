# this 理解

::: details 相关资料

- [菜鸟教程](https://www.runoob.com/js/js-this.html)
- [现代 Javascript 教程](https://zh.javascript.info/object-methods)
- [阮一峰: JavaScript 的 this 原理](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

:::

什么是 this，this 指的是函数运行时所在的环境。
JavaScript 中 this 比较神奇，它不是固定不变的，而是会随着执行环境的改变而改变。

::: tip 引用 zhangjg 的发言：

Javascript 是一个文本作用域的语言, 就是说, 一个变量的作用域, 在写这个变量的时候确定。
this 关键字是为了在 JS 中加入动态作用域而做的努力。 所谓动态作用域, 就是说变量的作用范围, 是根据函数调用的位置而定的。这个角度来理解 this, 就简单的多.

:::

我们先来看一下[菜鸟教程](https://www.runoob.com/js/js-this.html)对 this 的说明：

> - 在方法中，this 表示该方法所属的对象。
> - 如果单独使用，this 表示全局对象。
> - 在函数中，this 表示全局对象。
> - 在函数中，在严格模式下，this 是未定义的(undefined)。
> - 在事件中，this 表示接收事件的元素。
> - 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

简单地来说，this 在方法中出现，谁调用了这个方法，this 就代表谁。

## 示例

### 1.方法中的 this

```js
const role = {
  name: "刻晴",
  sayLove: function () {
    console.log("I love " + this.name); // 输出 I love 刻晴
    console.log(this === role); // 输出 true
  },
};

role.sayLove();
```

我们可以看到，对象的方法中使用了 this，由该对象调用该方法时，该方法中的 this 就等于该对象。

### 2. 函数中的 this

本质上说对象的方法也是个函数，所以我们这里讨论的函数是那些不是由对象调用的函数。

```js
function sayLove() {
  console.log(this); // 严格模式下为 undefined，非严格模式下浏览器环境中为 window，nodejs环境下为 global
}

sayLove();
```

在非严格模式下，全局作用域下的函数会挂载在全局对象上，由全局对象调用，故 this 指向全局对象。
浏览器环境中全局对象为 window，nodejs 环境下全局对象为 global。
在严格模式下，函数不由其他对象调用，this 等于 undefind

再举一个例子

```js
"use strict";
let obj = {
  sayHi() {
    console.log(this); // obj
    (function () {
      console.log(this); // undefined
    })();
  },
};

obj.sayHi();
```

第二个立即执行函数看似是在对象 obj 中，但是却并不是由 obj 调用，故 this 为 undefined。

### 3. 单独使用 this

```js
"use strict";

console.log(this);
```

当我们在全局环境中直接打印 this 时，不管是不是严格模式，浏览器环境中 this 总是指向 window，而 nodejs 环境中却是个空对象。

### 4. 构造函数中的 this

构造函数中的 this 指向实例对象

```js
function Keqing() {
  this.name = "刻晴";
  this.sayHi = function () {
    console.log("Hello ", this.name);
  };
  console.log(this);
}

new Keqing(); // Keqing { name: '刻晴', sayHi: [Function (anonymous)] }
```

### 5. 事件中的 this

在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素

```html
<button onclick="this.style.display='none'">点我后我就消失了</button>
```

## 改变 this 指向

我们使用函数的 bind,apply 或者 call 方法都可以轻松改变 this 的指向

```js
function Keqing() {
  this.name = "刻晴";
  this.sayHi = function () {
    console.log("Hello ", this.name); // 这个this指向可以改变
  };
  console.log(this); // 这个this指向不可以改变
}

let role = {
  name: "甘雨",
};

new Keqing().sayHi.apply(role); // Hello 甘雨
```

<Vssue />
