# 改变 this 指向

如果不了解 this，请移步[this 理解](./this%E7%90%86%E8%A7%A3.md)

本文研究改变函数内 this 指向

::: details 参考资料

- [菜鸟教程：JavaScript 中 call()、apply()、bind() 的用法](https://www.runoob.com/w3cnote/js-call-apply-bind.html)
- [现代 Javascript 教程：装饰器模式和转发，call/apply](https://zh.javascript.info/call-apply-decorators)
- [call、apply 和 bind 的区别以及源码解析](https://blog.csdn.net/weixin_40454791/article/details/121955359)
- [call ,apply 和 bind 方法 详解](https://blog.csdn.net/qq_43000315/article/details/125360096)

:::

## call、apply 和 bind 方法

JavaScript 在函数原型上面挂载了 call、apply 和 bind 这三个方法，它们可以改变函数中 this 的指向。

### 1.用法

> - call(this,…arguments);
> - apply(this,[arguments]);
> - bind(this, …arguments)(…newarguments);

### 2.简易实现

转载自[call、apply 和 bind 的区别以及源码解析](https://blog.csdn.net/weixin_40454791/article/details/121955359)

```js
Function.prototype.call = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  //
  context = context || window;
  // 谁调用call方法，this就指向谁
  context.fn = this;
  // 去掉所有参数中第一参数（指定的对象）
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.apply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  context.fn = this;
  let result;
  // 处理参数和 call 有区别，apply只有两个参数，第一个是对象，第二个是数组
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

Function.prototype.bind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      // 忽略传入的this
      return new _this(...args, ...arguments);
    }
    // 直接调用，将两边的参数拼接起来
    return _this.apply(context, args.concat(...arguments));
  };
};
```

<Vssue />
