# 低代码平台
- 物料区
- 画布区

1. 将物料区的组件拖拽到画布区即可，其实就是维护一个json对象，
用户执行拖拽，我们将组件对象添加到json的某一层中

2. 在右侧编辑某组件的属性，其实就是在组件的对象中添加属性

3. 将json展示成树状图

# tailwindcss
- 原子化css，只需要写类名，不需要写css，尤其在低代码平台被用到
npm install tailwindcss  postcss  autoprefixer

npx tailwindcss init -p  初始化 使用postcss

# 准备
npm i allotment --save 拖动改变容器大小

# zustand 仓库
1. npm i zustand --save

# 项目梳理

1. 创建了 componentsStore 仓库 存放整个json对象(components 数组) ，定义了如何往该json对象中植入子对象（组件）的函数，和移除子对象，更新子对象的函数

2. 创建了 componentConfigStore 仓库 存放一个对象，该对象用来映射每一个json对象的组件名，对应的真实组件的源代码

3. 定义了renderComponents函数用来渲染json为真实的html结构，借助React.createElement实现递归渲染（直接返回标签不行）

4. 实现物料区 组件 拖拽到画布区

    1. react-dnd
    react-dnd-html5-backend


    2. 真的拖拽（实现拖拽效果）一个组件到中间区域，就要将这个名字对应的对象植入到json中

    3. 借助 react-dnd中的useDrop 来接收组件

    4. 抽离useDrop代码，封装成一个hook

    5. 当中间画布展示好了组件之后，我们封装了一个HoverMask组件，为了实现用户鼠标移入哪一个组件上，组件展示一个被选择的效果
    - HoverMask：接收一个组件类名，通过js获取到该容器的几何属性，动态的将mask容器也设置成相同的大小并覆盖在组件容器上


