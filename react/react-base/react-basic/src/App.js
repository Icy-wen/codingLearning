import React, { useState, useEffect, useContext, useReducer,
  useCallback, useMemo, useRef, useImperativeHandle,
  forwardRef, createContext, useLayoutEffect, useDebugValue } from 'react';

// 创建一个 Context
const ThemeContext = createContext();

// 计数器的 reducer 函数
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 使用 forwardRef 和 useImperativeHandle 的组件
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} {...props} />;
});

// 主组件
const HooksExample = () => {
  // useState - 基础状态管理
  const [name, setName] = useState('');
  const [age, setAge] = useState(18);

  // useReducer - 复杂状态管理
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // useContext - 使用 Context
  const theme = useContext(ThemeContext);

  // useRef - 引用 DOM 元素或存储值
  const inputRef = useRef();
  const previousCountRef = useRef();

  // useLayoutEffect - DOM 操作后立即执行
  useLayoutEffect(() => {
    previousCountRef.current = state.count;
  }, [state.count]);

  // useEffect - 处理副作用
  useEffect(() => {
    console.log('Component mounted or updated');

    // 清理函数
    return () => {
      console.log('Component will unmount');
    };
  }, [name, age, state.count]); // 依赖项数组

  // useCallback - 缓存回调函数
  const handleIncrement = useCallback(() => {
    dispatch({ type: 'increment' });
  }, []);

  // useMemo - 缓存计算结果
  const isAdult = useMemo(() => {
    console.log('Calculating isAdult...');
    return age >= 18;
  }, [age]);

  // 自定义 Hook - 计算组件渲染次数
  const renderCount = useRenderCount();

  // 调试信息
  useDebugValue(isAdult ? '成年人' : '未成年人');

  return (
      <ThemeContext.Provider value="light">
        <div className="container">
          <h1>Hooks 示例</h1>

          <div className="card">
            <h2>useState</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="输入姓名"
            />
            <button onClick={() => setAge(age + 1)}>增加年龄: {age}</button>
          </div>

          <div className="card">
            <h2>useReducer</h2>
            <p>计数器: {state.count}</p>
            <p>上一次计数: {previousCountRef.current}</p>
            <button onClick={handleIncrement}>增加</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
          </div>

          <div className="card">
            <h2>useContext</h2>
            <p>当前主题: {theme}</p>
          </div>

          <div className="card">
            <h2>useRef</h2>
            <CustomInput ref={inputRef} placeholder="可聚焦的输入框" />
            <button onClick={() => inputRef.current.focus()}>聚焦输入框</button>
          </div>

          <div className="card">
            <h2>useMemo</h2>
            <p>年龄: {age}</p>
            <p>{isAdult ? '成年人' : '未成年人'}</p>
          </div>

          <div className="card">
            <h2>自定义 Hook</h2>
            <p>组件已渲染: {renderCount} 次</p>
          </div>
        </div>
      </ThemeContext.Provider>
  );
};

// 自定义 Hook - 计算组件渲染次数
const useRenderCount = () => {
  const count = useRef(1);
  useLayoutEffect(() => {
    count.current++;
  });
  return count.current;
};

export default HooksExample;