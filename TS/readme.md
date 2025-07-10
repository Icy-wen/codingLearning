# TypeScript
1. 静态类型：声明变量指定类型

# 类型
1. any
2. unknown
3. never

4. boolean Boolean
5. number Number
6. string String(字符串对象)
7. object  Object（广义对象，约定于any）
8. array
12. null
13. undefined
14. bigint(2020) BigInt


- 值类型
- 联合类型
const aa:number|string 
- 自定义类型
type sexType='男'|'女'
let a:sexType='男'

interface Person{
    name:string,
    age:number
}
let p:Person={
    name:'张三',
    age:18
}
- 泛型
- 元组
let tuple:[number,string]
