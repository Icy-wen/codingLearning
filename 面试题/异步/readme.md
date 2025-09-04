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

# Generator函数（生成器）
- 迭代 vs 循环
- 生成器函数
1. 函数名前加*
2. 函数中可以使用yield关键字，yield关键字可以暂停函数的执行
3. 调用生成器函数不会立即执行函数，而是返回一个迭代器对象
4. 迭代器对象有next方法，调用next方法返回一个对象，执行一个yield语句，返回一个对象有value和done属性
5. value属性是yield后面的表达式的值,next接收参数，作为上一个yield语句的返回值
6. done属性是一个布尔值，true表示迭代完成，false表示迭代未完成


# async await
1. async函数返回一个promise对象
2. await关键字只能在async函数中使用
3. await关键字后面可以接一个promise对象，会将promise resolve出来的值读取到，
也可以接一个普通的值,但如果是普通值await对他们没有影响，不具备处理异步的能力
4. await关键字后面的promise对象会阻塞async函数的执行，等待promise对象状态改变，
    才会继续执行async函数
5. async函数中可以使用try catch捕获错误

aysnc await= generator + co + promise
- 实现原理
async/await 本质上是 Generator 函数结合自动执行器（类似上述 co 函数）的语法糖。
其原理是：async 函数会被编译为一个返回 Promise 的 Generator 函数，
而 await 关键字相当于 Generator 中的 yield，用于暂停执行并等待异步操作完成。
JavaScript 引擎内置了类似 co 函数的自动执行逻辑，会自动驱动 Generator 函数执行 —— 在遇到 await 时暂停，
等待后面的 Promise 状态改变后，将结果作为 await 的返回值传入，再恢复函数执行，
直到所有异步操作完成，最终将函数返回值包装成 Promise resolve 出去，
从而实现了用同步代码风格编写异步逻辑的效果，简化了 Generator 函数需要手动编写执行器的复杂性。
