//总仓库
import {configureStore} from "@reduxjs/toolkit";
import questionalReducer from "./modules/questionalStore.ts";
export  const store=configureStore({
    reducer:{ //注册子模块
        questional:questionalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>