import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 获取到 html文件中的id为root的那个div元素
//将div进行修饰,让它能盛放react的模块

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


