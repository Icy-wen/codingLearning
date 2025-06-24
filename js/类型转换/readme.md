# == vs ===
1. == 会发生隐式类型转换，所以只判断值是否相等
2. === 不会发生隐式类型转换，所以会判断值和类型是否都相等


# 类型转换
显式转换和隐式转换只看当前的代码场景，原理是一样的




- 显式类型转换
    - Number() ''-> 0 不传-》0   https://es5.github.io/#x9.3   toNumber()
    - String()    https://es5.github.io/#x9.8   toString()
    - Boolean()
    只有 8 种 falsy 值：
● undefined
● null
● NaN
● false
● '' (empty string)
● 0
● -0
● 0n (BigInt(0))
Function 构造函数，比如 new Number 和 new Boolean，是 truthy。

- 隐式类型转换
1. 原始类型转原始类型
2. 引用类型转原始类型
    1. 转布尔  -- 都是true
    2. 转字符串 -- 

# toPrimitive
- 引用类型转原始类型调用

- toPrimitive(obj,String)

1. 判断obj 是否为原始类型，是则直接返回
2. 否则，调用toString(),为原始类型,返回
3. 否则，调用valueOf(),为原始类型,返回
4. 抛出TypeError错误



- ToPrimitive(obj,Number)
1. 判断obj 是否为原始类型，是则直接返回
2. 否则，调用valueOf(),为原始类型,返回
3. 否则，调用toString(),为原始类型,返回
4. 抛出TypeError错误


# valueOf()
- 在Object.prototype， 只能将转包装类(new String()、Number()、Boolean())的对象转为原始类型


# toString()
- js中大部分的构造函数原型上都重写了自己的toString 方法
1. {}.toString 返回由'[object'和[[class]] '']'组成的字符串
2. [].toString 方法返回由数组中每个值拼接而成的一个以逗号分隔的字符串
3. xxx.toString() 直接返回xxx的字符串字面量

# 发生隐式类型转换的场景
1. 四则运算 + - * / %
2. 判断语句    if while == >=  <= != > <
3. 


-  +
1. 作为一元运算符
会发生隐式类型转换，转成number
2. 作为二元运算符 
只要+两边有一个是字符串，那么另一个也转为字符串拼接 
