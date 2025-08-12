# 说说你对 css 盒子模型的理解
1. 是什么 浏览器渲染页面时，会根据标准将容器渲染成一个包含内容、内边距、边框、外边距的盒子

2. 特性

标准盒模型 （width = content宽度）
IE(怪异)盒模型 （width = content宽度 + 内边距 + 边框）
属性 box-sizing: content-box; 标准盒模型 box-sizing: border-box; IE(怪异)盒模型

# css选择器有哪些？优先级？
id 选择器
类名选择器
标签选择器
后代选择器
子代选择器
相邻选择器
群组选择器
属性选择器
!important > id 选择器 > 后代选择器 == 子代选择器 == 相邻选择器 == 属性选择器 > 类名选择器 > 标签选择器

# 伪类选择器
伪元素选择器

# 说说 em/px/rem/vw/vh 单位的区别
是什么 相对单位： em, rem, vw, vh 绝对单位: px

特点

em 相对于父元素的字体大小
rem 相对于根元素的字体大小
vw 相对于视口宽度
vh 相对于视口高度
场景 做响应式布局，和 做移动端适配时，使用相对单位

# css 中有哪些隐藏元素的方法，区别是什么？
display: none; 不占据文档流， 不响应事件
visibility: hidden; 占据文档流， 不响应事件
opacity: 0; 占据文档流， 响应事件
width: 0; height: 0; overflow: hidden; 不占据文档流， 不响应事件
clip-path: polygon(0 0, 0 0, 0 0, 0 0); 占据文档流， 不响应事件


# 说说你对 BFC 的理解
是什么 块级格式化上下文，是一种独立的渲染区域，内部拥有一套属于它自己的渲染规则

特点

同普通容器一样，BFC 容器中的元素依然是垂直排列的
同普通容器一样，BFC 容器中的元素在垂直方向上同样存在 margin 重叠
BFC容器在垂直方向上的 margin 不会与子元素的 margin 重叠
BFC容器在计算高度时，会将浮动元素的高度也计算在内
创建 BFC 的方式：

overflow: 不为 visible
float: 不为 none
position: absolute | fixed;
display: inline-xxxx | table-xxx

场景

清除浮动
防止 margin 重叠
元素水平垂直居中的方法有哪些
弹性
定位 + margin负值 (需要知道元素的宽度和高度)
定位 + transform
grid布局
table布局

# 如何实现多栏布局
两栏布局

弹性
calc() 计算右侧宽度
浮动
三栏布局

弹性 + order （主体内容优先加载）

grid 布局

圣杯布局 (浮动 + 定位 + 负 margin)

双飞翼布局 (浮动 + 负 margin)



# css常见动画有哪些
1. 过渡动画
实现元素状态变化时的平滑过渡   transition: all 0.3s; /* 所有属性过渡 */
2. 转变动画 transform
3. 自定义动画 
@keyframes 定义动画
animation 调用动画

# 解释一下回流重绘
- 从输入url到页面渲染完整过程
1. 网络层
2. 浏览器层

- 浏览器层（得到数据包后）：
1. 解析html数据得到DOM树
2. 解析css数据得到CSSOM树
3. 合并DOM树和CSSOM树得到渲染树
4. 计算页面布局（回流）
得到没有消失文档流的每一个容器的几何属性
5. 将信息发给GPU，GPU根据信息绘制（重绘）

- 发生回流的操作
1. 刷新浏览器页面
2. 容器的几何属性变更
3. 增加或删除可见DOM元素
4. 浏览器的窗口尺寸变更

- 浏览器的优化策略
 每一次回流重绘都会带来额外的性能，因此大多数浏览器会通过队列来优化这回流重绘的次数，浏览器将会导致回流的操作都存入队列，直到一段时间或达到阈值再一次性清空队列

- 特殊属性
offsetWidth/offsetHeight/offsetLeft/offsetTop
clientWidth/clientHeight/clientLeft/clientTop
scrollWidth/scrollHeight/scrollLeft/scrollTop
会强制刷新优化队列（触发队列执行）

- 如何尽量减少回流重绘
1. 先设置从文档流剔除（display为none）的元素不会触发回流重绘
2. 先放在文档碎片里最后一起添加到文档流
3. 往克隆体添加元素，最后替代原始元素


# css画一个三角形
1. clip-path: polygon();
2. 边框  border: 50px solid red;
        border-top-color: transparent;
        border-left-color: transparent;

# 聊一聊响应式布局
- 是什么 响应式布局是指网页的布局能够根据不同的设备屏幕尺寸自动调整，以提供更好的用户体验。

- 实现方式
1. 媒体查询
2. 百分比
3. rem+媒体查询||js
4. vw/vh

# 画一条0.5px的线
1. transform:scaleY(0.5)

# 让浏览器支持小于12px的文字
1. 新版本已经适配
2. 老版本设置zoom的值  （变焦）


# 聊一聊css的预编译语言
- 是什么
扩充了css语法，增加了变量、函数、混合等功能

有哪些
1. sass --比较繁重
2. less
3. stylus -- 基于nodejs运行 没有{}



