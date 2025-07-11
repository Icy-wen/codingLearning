import { createSlice } from "@reduxjs/toolkit";
//仓库子模块
const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    list:["css"]
  },
  reducers: {
    add(state) {
      state.count++;
    },
    addList(state,action){
      state.list.push(action.payload)
    }
  },
});

const { add } = counter.actions;

export { add };
const { addList } = counter.actions;

export { addList };

const counterReducer = counter.reducer;
export default counterReducer;