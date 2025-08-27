# HOOK
1. useState--值变会重新渲染
2. useEffect
3. useContext(父组件向子孙组件传值)
4. useCallback(缓存函数，只有在依赖项变化时才会重新创建，和useMemo一起用)

5. useReducer(复杂状态管理，顶替useState和useEffect)

6. useMemo(缓存组件，只有在props变化时才会重新渲染,优化防止组件重复渲染)

7. useRef(获取DOM元素)--值变不会重新渲染

memo + useCallback 缓存函数，只有在依赖项变化时才会重新渲染
memo + useMemo 缓存值，只有在值变化时才会重新渲染

8. useLayoutEffect(在DOM更新后同步调用)

# HOOK 闭包陷阱和解决方案
1. 当useEffect依赖项为空数组时，会在组件挂载时执行一次，执行完成后销毁，
如果useEffect中引入了state，会导致闭包陷阱，
导致state的值不会更新,更新的是全局的，每次取到的是闭包中的值。多出现在useEffect 中多次修改一个值

- 解决方案
1. 不让代码产生闭包，给setState传递函数，函数中可以访问到全局最新state
2. 使用useReducer来管理状态，useReducer中可以访问到全局最新state
3. 将被修改的状态存入依赖数组中，当状态修改时，会重新执行useEffect
4. 借助useRef，每次组件更新时，给ref.current赋值最新的函数，在useEffect中使用ref.current来访问最新的值

# 自己封装过什么hook

1. useHover
2. useMountedState
https://github.com/streamich/react-use/blob/master/src/useScrolling.ts

# 数据的不可变性   https://github.com/immutable-js/immutable-js
比较对象https://github.com/facebook/react/blob/main/packages/react-dom/src/__tests__/ReactCompositeComponent-test.js
1. 继承PureComponent类的组件，先判断引用地址，如果不同会进行浅比较props和state，如果没有变化就不重新渲染
2. 普通的class组件，只要setState调用了就会重新渲染
3. function组件在用setXxx时，只会对比state本身引用地址有没有变化，变了就重新渲染

# immutable
通过创建一种新的不可变的数据结构，来规避react源码中对两个对象是否相同的判断规则

# 如何实现组件的缓存 keepalive
react执行过程中会将组件编译成对象，组件之间的切换操作，其实就是react移除旧的组件对象，创建新的组件对象再渲染的行为

移除组件对象的操作，称为卸载组件
创建组件对象的操作，称为挂载组件

keepalive的实现原理
1. 当组件卸载时，将组件的实例对象缓存起来
2. 组件被挂载时，会从缓存中取出组件的实例对象，再渲染

缓存操作本质上省去组件被重新读取并编译成对象的过程


