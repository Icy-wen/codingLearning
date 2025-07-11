import { createSlice } from "@reduxjs/toolkit";
//仓库子模块
const todoList = createSlice({
  name: "todoList",
  initialState: {
    list:[
        {
            id:1,
            name:"学习css",
            completed:false
        }
    ]
  },
  reducers: {
    addTodo(state,action){
        state.list.push({
            id: Date.now(), // 保证唯一
            name:action.payload,
            completed:false
        })
    },
    toggleTodo(state, action) {
        const todo = state.list.find(item => item.id === action.payload);
        if (todo) {
            todo.completed = !todo.completed;
        }
    },
    toggleAll(state, action) {
        state.list.forEach(item => {
            item.completed = action.payload;
        });
    },
    deleteTodo(state, action) {
        state.list = state.list.filter(item => item.id !== action.payload);
    }
  },
});
export const {addTodo,toggleTodo,toggleAll,deleteTodo} = todoList.actions
export default todoList.reducer