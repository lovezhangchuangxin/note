# rem 适配布局方案

::: tip 感谢
本文大部分参考 pink 老师的[教程](https://www.bilibili.com/video/BV14J4114768?p=441&vd_source=64e78485916b3056de5fa47d8415f4e8)，在此表示感谢
:::

## 1. rem 单位

> rem(root em)是一个相对单位，类似于 em，不过 em 是相对于父元素字体的大小，而 rem 是相对于 html 元素字体的大小。

rem 的优势是通过改变 html 元素字体的大小就可以实现所有使用 rem 元素尺寸的整体改变

## 2. 媒体查询

媒体查询（Media Query）是 CSS3 新语法

> - 使用@media 查询，可以针对不同的媒体类型定义不同的样式
> - @media 可以针对不同的屏幕尺寸设置不同的样式
> - 当你重置浏览器的大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
> - 目前针对很多苹果手机，Android 手机，平板等设备都用得到多媒体查询

### 2.1 媒体查询语法

语法规范

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

> - 用@media 开通 注意@符号
> - mediatype 媒体类型
> - 关键字 and not only
> - media feature 媒体特性，必须有小括号包含

#### 2.2 媒体查询类型

将不同的终端设备划分为不同的类型，称为媒体类型

| mediatype 值 |          所代表类型          |
| :----------: | :--------------------------: |
|     all      |           所有设备           |
|    print     |       打印机和打印预览       |
|    screen    | 电脑屏幕，平板电脑，智能手机 |

#### 2.3 关键字

关键字将媒体类型或多个特性连接到一起做为媒体查询的条件

> - and：可以将多个媒体特性连接到一起，相当于"且"的意思
> - not：排除某个媒体类型，相当于"非"的意思，可以省略
> - only：指定某个特定的媒体类型，可省略

#### 2.4 媒体特性

不同的媒体有不同的特性，我们可以根据不同媒体上的媒体特性设置不同的风格，媒体特性有很多，先简要了解以下三个

| 媒体特性值 |         解释         |
| :--------: | :------------------: |
|   width    |   页面可见区域宽度   |
| min-width  | 页面最小可见区域宽度 |
| max-width  | 页面最大可见区域宽度 |

#### 2.5 示例代码

```css
/* 屏幕宽度小于768px时 */
@media screen and (max-width: 768px) {
  html {
    font-size: 20px;
  }
}
/* 屏幕宽度大于768px小于992px时 */
@media screen and (min-width: 768px) and (max-width: 992px) {
  html {
    font-size: 30px;
  }
}
/* 屏幕宽度大于992px时 */
@media screen and (min-width: 992px) {
  html {
    font-size: 50px;
  }
}
```

## 适配布局做法

了解了上面 rem 单位和媒体查询的原理，做适配布局就很简单了。通过媒体查询在不同屏幕宽度时设置不同的 html 字体大小，再让子元素都使用 rem 单位代替之前的 px 单位即可。

简单的案例：

::: details 点击查看代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @media screen and (max-width: 640px) {
        html {
          font-size: 20px;
        }
      }

      @media screen and (min-width: 640px) {
        html {
          font-size: 40px;
        }
      }

      h1 {
        font-size: 0.5rem;
      }
    </style>
  </head>

  <body>
    <h1>
      我是刻晴，璃月七星中的“玉衡”。变革的时机已经到来，维持了千年的秩序即将被改写。这历史性的时刻，你愿意和我一起见证吗？
    </h1>
  </body>
</html>
```

:::

## 媒体查询引入资源

根据媒体查询匹配的结果来使用不同的 css 文件，如

```html
<link
  rel="stylesheet"
  href="style320.css"
  media="screen and (min-width: 320px)"
/>
<link
  rel="stylesheet"
  href="style640.css"
  media="screen and (min-width: 640px)"
/>
```

<Vssue />
