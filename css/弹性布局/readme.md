# 弹性布局
- flexbox
- 简便、完整、响应式的实现各种页面
# 子容器属性
1. 弹性容器有主轴和交叉轴之分
2. 弹性容器的子元素默认都是沿着主轴排列的
3. 子容器默认不放大，但可以设置flex-grow:1 来使子容器放大
4. 子容器默认可以缩小，但可以设置flex-shrink:0 来使子容器不缩小
6. 子容器可以设置order来改变子容器的排列顺序
7. flex :1 0  100px可以放大比例为1,不可以缩小
8. flex-basis 可以设置子容器的宽度
9. align-self可以设置子容器在交叉轴的对齐方式


# 弹性容器本身
1. justify-content: center;  控制所有子元素在主轴上居中
2. align-items: center;  控制所有子元素在交叉轴上居中
3. flex-direction: column;  弹性容器主轴为垂直方向
4. flex-wrap: wrap; 允许子容器在主轴上换行
5. flex-flow: row wrap; 是 flex-direction 和 flex-wrap 的简写

# 多栏布局
1. 两栏布局
2. 三栏布局