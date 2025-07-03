- 单页应用：整个项目只有唯一的一个html文件，所有的页面都做成组件的样子，被添加到html文件中进行渲染
# 组件
1. class组件   不推荐
2. function组件

# hooks(钩子函数---》函数像钩子一样挂载在组件的生命线上)
- 由react官方封装好的一系列函数，它们的用法和作用
1. useState 不支持异步
2. useEffect --副作用函数  初次，卸载
    - 作用：在函数组件中模拟类组件的生命周期函数，在函数组件中可以使用
    - 用法：useEffect(()=>{
        // 函数体
    },[依赖项])
    1. 组件每次加载（挂载）会触发
    2. useEffect 第二个参数为一个空数组（里面值为常量时），只会在初次渲染触发
    3. 依赖项改变会带来use Effect的重新执行
    4. useEffect 第一个参数是函数，该函数内部返回一个新函数，新函数会在组件不展示时（组件被卸载）执行
3. useLayoutEffect -- 中的 effect 函数作为同步函数来执行

4. useReducer -- 当修改state 的逻辑比较复杂时，用useReducer

      1. 传入的 reducer 函数中不能直接修改原 state，必须要返回一个新对象

      2. useReducer + immer 
5. useRef -- 获取 DOM 结构