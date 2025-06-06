# 文档流
浏览器从左到右，从上到下，依次渲染页面元素，这个过程称为文档流。


# 浮动布局
- 浮动存在的意义
1. 文字环绕图片

- 水平布局
1. display: inline-block; 会带来间隙问题，解决办法：
 给父元素设置 font-size: 0
2. float: left; 

- 浮动布局特点
1. 浮动元素的高度不计算在父容器的高度内，导致父容器和后续元素重叠
2. 清除浮动：
  1. 给父元素设置高度（高度值难以确定，发生换行）
  2. 在浮动元素的后面添加一个空的 div 元素，设置 clear: both;
  3. 伪元素清除浮动：
     给父元素设置伪元素：
      ```css
      .clearfix::after {
        content: '';
        display: block;
        clear: both;
      }
      ```
    4. 给被浮动影响的元素做浮动清除，clear: both;
    5. 将浮动元素的父容器设置成 BFC  --- 推荐
      ```css
      .clearfix {
        overflow: hidden;
      }
      ```

# BFC - block formatting context
- 块级格式化上下文 （类比块级作用域）
1. 默认情况下，子容器的 margin-top 会和父容器的 margin-top 发生重叠
2. BFC用来解决这个问题：
  给父容器设置 BFC：
     ```css
     .clearfix {
        overflow: hidden;
      }
      ```
- 如何创建 BFC容器：
1. overflow: hidden; || auto || scroll || overflay
2. position: absolute; || fixed;
3. display: inline-xxx|| flex||grid;
4. float: left; || right;

- BFC容器的特点：
拥有一套独特的渲染规则
1. 子容器的 margin-top 不会和父容器的 margin-top 发生重叠
2. BFC容器在计算高度的时候会计算浮动元素的高度