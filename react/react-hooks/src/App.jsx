import React, { useState, useEffect } from 'react';

function BasicUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 1. 每次渲染后执行（无依赖数组）
  useEffect(() => {
    console.log('每次渲染后执行');
  });

  // 2. 仅初始渲染后执行（空依赖数组）
  useEffect(() => {
    console.log('仅初始渲染后执行');
    // 可用于初始化操作，如获取数据
  }, []);

  // 3. 监听特定状态变化（依赖数组中有值）
  useEffect(() => {
    console.log(`count 变为: ${count}`);
    // 可用于响应 count 的变化
  }, [count]);

  // 4. 带清理函数的 effect
  useEffect(() => {
    console.log('设置订阅或副作用');
    
    // 清理函数在组件卸载前或下次执行前调用
    return () => {
      console.log('清理副作用或取消订阅');
    };
  }, [count]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">useEffect 基础示例</h1>
      
      <div className="mb-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
      </div>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-bold text-gray-800">控制台输出</h3>
        <p className="text-sm text-gray-600">查看浏览器控制台了解useEffect执行情况</p>
      </div>
    </div>
  );
}

export default BasicUseEffect;  