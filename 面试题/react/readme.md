# HOOK
1. useState
2. useEffect
3. useContext(父组件向子孙组件传值)
4. useCallback(缓存函数，只有在依赖项变化时才会重新创建，和useMemo一起用)

5. useReducer(复杂状态管理，顶替useState和useEffect)

6. useMemo(缓存组件，只有在props变化时才会重新渲染,优化防止组件重复渲染)

7. useRef(获取DOM元素)

memo + useCallback 缓存函数，只有在依赖项变化时才会重新渲染
memo + useMemo 缓存值，只有在值变化时才会重新渲染

8. useLayoutEffect(在DOM更新后同步调用)

# HOOK 闭包陷阱和解决方案
1. 当useEffect依赖项为空数组时，会在组件挂载时执行一次，执行完成后销毁，
如果useEffect中引入了state，会导致闭包陷阱，
导致state的值不会更新,更新的是全局的，每次取到的是闭包中的值。多出现在useEffect 中多次修改一个值

- 解决方案
1. 不让代码产生变量，给setState传递函数，函数中可以访问到全局最新state
2. 使用useReducer来管理状态，useReducer中可以访问到全局最新state
3. 将被修改的状态存入依赖数组中，当状态修改时，会重新执行useEffect
4. 借助useRef，每次组件更新时，给ref.current赋值最新的函数，在useEffect中使用ref.current来访问最新的值(自己封装)

# 自己封装过什么hook

1. useHover

