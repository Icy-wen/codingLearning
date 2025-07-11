# 组件通信
1. 父子组件通信
- 父组件直接在子组件标签上写属性，子组件通过props接收
2. 子父组件通信
-父组件创建一个函数，子组件调用这个函数，并将需要的数据作为参数传递
3. 兄弟组件通信
- 子传父，父传子
4. 跨层级组件通讯
- useContext()钩子函数
5. 任意组件通信
仓库 redux  zustand mobx
1.  @reduxjs/toolkit 创建仓库
2. react-redux 仓库和react关联
3. 创建一个总仓库，在总仓库中注册子模块，子模块创建在modules目录中.使用useSelector()和useDispatch()获取仓库中的数据和触发器
修改仓库数据：
- 调用仓库方法，得到一个action行为
- 调用dispatch将action行为传递给仓库