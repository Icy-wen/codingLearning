# 回调
- 回调地狱 （不会爆栈）:
1. 不利于阅读和维护
2. 函数嵌套过深，很难处理错误
3. 无法通过try catch 捕获错误

# promise
- 原理：promise里维护了一个状态，默认值是pending，还有fullfilled和rejected状态，
还提供了resovle和rejected函数，

- then的原理：
1. 默认返回一个新的promise对象，状态同then前面的promise对象状态
2. then中的回调如果存在return promise，那么then则不启用默认的promise，而是启用人为返回的promise对象

- race语法
1. 接收一个数组，数组中接收多个promise对象，哪个promise先改变状态。race就用哪个promise的状态

创建一个新的 Promise，并遍历传入的 Promise 数组，
在每个 Promise 解决或拒绝时调用新 Promise 的 resolve 或 reject 方法，从而实现 race 方法。


- all 语法

1. 接收一个数组，数组中接收多个promise对象，所有promise对象都改变为成功，all状态才会改变为成功，
并且将所有resolve的值存在一个数组中，并将数组resolve出来
2. 只要有一个失败，将失败的那个reject出来作为all reject的值


- any 语法
1. 接收一个数组，数组中接收多个promise对象，只要有一个promise对象改变为成功，any状态就会改变为成功，
并且将成功的那个resolve的值作为any resolve的值
2. 只要所有的promise对象都失败，将所有失败的reject值存在一个数组中，并将数组reject出来

- finally 语法
1. 接收一个回调函数，回调函数不接收任何参数
2. 无论promise对象状态如何，finally中的回调函数都会执行
3. finally中的回调函数执行完成后，会将promise对象的状态返回

- allSettled 语法
1. 接收一个数组，数组中接收多个promise对象，所有promise对象都改变状态，allSettled状态才会改变，
并且将所有promise对象的状态和值存在一个数组中，并将数组resolve出来
2. 状态：fulfilled和rejected
3. 值：成功的值或者失败的原因

