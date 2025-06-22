# 拷贝
- 复刻一个对象和原对象长的一模一样

- 拷贝手段
1. Object.create(obj)
2. [].concat(arr)
3. 数组解构  [...arr]
4. arr.slice(0，arr.length)
5. Object.assign({},obj)
6. arr.toReversed().reverse()

# 深拷贝：层层拷贝，新对象不受原对象的影响
1. JSON.parse(JSON.stringify(obj))
- 无法识别 bigint类型，无法处理undefined，symbol，function
- 无法处理循环引用
2. structuredClone(obj)
- 手写深拷贝

# 浅拷贝
只拷贝最外层，原对象的属性改变新对象也会改变
1. Object.create(obj)
2. [].concat(arr)
3. 数组解构  [...arr]
4. arr.slice(0，arr.length)
5. Object.assign({},obj)
6. arr.toReversed().reverse()
