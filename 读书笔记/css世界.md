# 《CSS世界》

## '流'

CSS的基本定位和布局机制

块级元素自动铺满容器

内联级元素并排排列,空间不足则换行

默认从左向右 自上而下

可以通过[`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode)更改方向

## 为什么`list-item`元素会出现项目符合

每个元素都有两个盒子: 外在盒子和内在盒子

了解css基础概念: [视觉格式化模型(visual formatting model)](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)

### 盒的生成

#### 块级元素与块盒(Block-level elements and block boxes)

> 块级盒参与([块格式化上下文 block formatting context](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model))。每个块级元素至少生成一个块级盒，称为主要块级盒(principal block-level box)。一些元素，比如`<li>`，生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒。

##### 块级盒与块容器盒概念不同

块级盒(Block-level boxes):父元素与兄弟元素之间的表现

块容器盒(Blocks-containing boxes):元素和后代之间的表现

同时是块容器盒的块级盒称为块盒(block boxes)

## 5.内联元素与流

>对于非替换的行内元素来说，尽管内容周围存在内边距与边框，但其占用空间（行高）由 **`line-height`** 属性决定。

节选自[盒模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

### 字母x

#### ex

ex **IE6** 小写字母x的高度的相对单位

不受字体和字号影响的内联元素的垂直居中对齐

文字后面小三角图标

```css
.icon-arrow {
    display:inline-block;
    width:20px;
    height:1ex;
    background:url(arrow.png) no-repeat center
}
```

## `line-height`

行高: 一行文字的高度

行距: `line-hight` - `font-size`

内容区(content area) 受font-size和font-family影响

em-box 只受font-size影响

**只有宋体 内容区域和em-box是等同的**

`line-height`不能影响替换元素