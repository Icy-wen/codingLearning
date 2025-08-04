# 前端路由实现
1. 浏览器不刷新
2. 监听url改变


# hash
- 在浏览器眼里，url中携带了# ，# 后面的内容都会被认为是hash值，hash值不会引起页面的刷新

原理：
监听 hashchange 事件
当 hash 值变更时，触发 hashchange 事件，通过location获取#和后面的内容
在事件处理函数中，根据 hash 值，找到对应的组件，将组件渲染到页面中


浏览器提供了一个 history 对象，用来管理浏览器的历史记录，其内部提供了以下方法：

pushState() 向历史记录栈中添加一条记录
popState 从历史记录栈中取出最后一条记录
replaceState() 替换历史记录栈中的最后一条记录
pushState修改 url 不带来页面刷新

监听popState 事件可以关联到浏览器的前进后退事件