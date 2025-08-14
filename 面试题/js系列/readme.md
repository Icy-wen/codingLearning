# 1. js数组上常用的方法
- 增： push()、splice()、unshift()、concat()
- 删： pop()、shift()、splice()、slice(start, end)
- 改： splice()、flat()
- 查： indexOf()、lastIndexOf()、includes()、find((item) => {})、findIndex((item) => {})、findLastIndex((item) => {})
- 迭代： 
forEach()
return在forEach()里无法终止迭代，只能靠try catch包裹forEach()来终止迭代
、map()、filter()、reduce()、some()、every()、sort()

# 2. 聊一下flat方法（数组扁平化）
口头描述 flat.js
- 是什么
flat是Array原型上的函数，用于将高维数组处理成低维数组

- 原理：
1. 递归
2. reduce +递归
3.  while+解构
4. toString()

# 3. 字符串身上常见的方法


- 增：concat()
- 删：slice()、subString()
- 改：replace()、toUpperCase() / toLowerCase()、trim()、padStart()、padEnd()、repeat()
- 查：indexOf()、lastIndexOf()、includes()、startsWith(searchValue) / endsWith(searchValue)、charAt()

- splice() match()

# 4.谈一谈JavaScript的类型转换机制
https://juejin.cn/post/7519437813471215651
- 是什么
js引擎在执行各种运算符时对于数据的类型是有要求的，如果数据类型和预期的不符合，就会发生类型转换

- 特点
1. 显示类型转换
借助构造函数来将一种类型转换成希望的类型，这其中如果时原始值转原始值，官方给出了直接的转换结果

引用类型转原始类型
1. ToNumber()||ToString()
2. ToPrimitive()
    1. 判断是否为原始类型，是则返回
    2. 否则调用valueOf(),得到原始值则返回
    3. 否则调用toString(),得到原始值返回
    4. 否则报错
3. 不是目标类型，继续调用

2. 隐式类型转换
通常发生在四则运算、比较运算、判断语句

# 5. 介绍一下js中的拷贝
https://juejin.cn/post/7525747511605493775#heading-7
- 是什么
因为js中原始类型存在栈中，引用类型存在堆中，再把引用地址存在栈中
拷贝通常只发生在引用类型上。效果是让新数据拥有和原数据一样的值
- 实现方法
1. 浅拷贝：拷贝对象的属性，值如果是引用类型则共用同一个地址
过滤隐式属性：hasOwnProperty()

2. 深拷贝：如果是引用类型，则创建新的对象进行新的拷贝，实现层层拷贝
MessageChannel() -- 不能处理function symbol
- 原理

1. 递归

# 说说你对闭包的理解

- 是什么
作用域规则，内部作用域一定能访问外部
调用栈规则，函数执行完后一定会被销毁弹出栈
当函数A中声明的函数B被拿到函数外调用时，为了保证上面两条规则都能正常运行函数执行后不会完全销毁，而是把函数B需要的变量保存到一个集合中，这个集合就是闭包，这样函数B在函数A销毁后依然能正常运行
闭包是一个集合


- 特点
1. 用于封装模块，避免全局变量污染
2. 延长了变量的生命周期

- 缺点
内存泄漏 -- 调用栈的可用空间变小
- 场景
1. 柯里化
2. 单例模式