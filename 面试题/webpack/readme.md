# create-react-app
- webpack 封装得到
- webpack将整个项目的所有的依赖文件进行读取，解析，打包成浏览器可以识别的静态资源文件

# webpack工作原理
https://www.webpackjs.com/concepts/

1. webpack 只能打包js后缀文件
2. 遇到高版本的js代码，webpack无法直接打包，需要使用babel进行转换https://www.babeljs.cn/docs/
@babel/core  核心模块
@babel/preset-env 提供一个Babel的配置文件
babel-loader 加载器（将babel集成到webpack中）


# 打包流程
1. 读取项目的入口文件的代码
2. 分析代码，递归的去读取模块依赖的文件内容