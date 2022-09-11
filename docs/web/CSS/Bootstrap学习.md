# Bootstrap 学习

> Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

## 1. 响应式开发

为了便于理解 Bootstrap 的响应式布局原理，我们先简要了解响应式开发，就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同的设备

|         设备划分         |     尺寸区间      |
| :----------------------: | :---------------: |
|     超小屏幕（手机）     |      <768px       |
|     小屏设备（平板）     | >=768px ~ <992px  |
|  中等屏幕（桌面显示器）  | >=992px ~ <1200px |
| 宽屏设备（大桌面显示器） |      >1200px      |

## 2. Bootstrap 初步使用

::: details 基本模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    // 使用IE浏览器最新版，不过现在IE已经凉了
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
      crossorigin="anonymous"
    />

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!-- 条件注释，只对IE生效-->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.cn/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.cn/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script
      src="https://cdn.jsdelivr.cn/npm/jquery@1.12.4/dist/jquery.min.js"
      integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ"
      crossorigin="anonymous"
    ></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
      integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

:::

稍微注意一下的是上述基本模板中使用了条件注释，来引入 IE 所需要的资源以便支持 bootstrap 的使用。IE 浏览器已凉，对条件注释只需了解即可。

更深入了解条件注释的文章：[关于 HTML 条件注释你可能不知道的一些事儿](https://m.w3cschool.cn/article/36585422.html)

上面基本模板中使用了 CDN 来引入资源，虽然方便，但是网络不好时可以加载较慢，下面使用本地引入 bootstrap 的方式。学习项目的基本目录结果如下：

![学习项目结构](/assets/images/bootstrap学习项目结构.jpg)

::: details index.html 文件基本结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>学习Bootstrap</title>
    <link
      rel="stylesheet"
      href="./bootstrap-3.4.1/dist/css/bootstrap.min.css"
    />
    <style></style>

    <script src="./js/jquery-3.6.0-min.js"></script>
  </head>

  <body></body>
</html>
```

:::

### 2.1 布局容器

> Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。我们提供了两个作此用处的类。注意，由于 padding 等属性的原因，这两种 容器类不能互相嵌套。

.container 响应式布局的容器。原理见上文[响应式开发](#_1-响应式开发)，使用了媒体查询。

```js
<div class="container">...</div>
```

.container-fluid 流式布局容器，类似于百分比布局容器，是占据全部视口（viewport）的容器。

```js
<div class="container-fluid">...</div>
```

## 3. Bootstrap 栅格系统

> Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列

### 3.1 栅格参数

通过下表可以详细查看 Bootstrap 的栅格系统是如何在多种屏幕设备上工作的。

![bootstrap栅格参数](/assets/images/bootstrap栅格参数.png)

- 行（row）必须包含在 container 或者 container-fluid 容器中
- 通过“行（row）”在水平方向创建一组“列（column）”。你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
- 实现列的平均分配，需要给列添加类前缀
- xs 指 extra small，超小；sm 指 small，小；md 指 medium，中等；lg 指 large，大
- 默认的列数最多为 12，多余的列会作为一个整体另起一行排列
- 每一列默认有左右 15px 的 padding
- 可以为一个列指定多个设备的类名，以便在不同的设备下划分不同的份数，例如：`class="col-md-4 col-sm-6"`

### 3.2 列嵌套

列嵌套就是说除了行中可以套列，列中也可以套行，从而不断套娃。

```html {4}
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-4">1</div>
        <div class="col-md-8">2</div>
      </div>
    </div>
    <div class="col-md-6">3</div>
  </div>
</div>
```

我们列嵌套最好给列加上 row 行，这样可以取消父元素的 padding 值，并且高度自动和父元素一样高

<Vssue />
