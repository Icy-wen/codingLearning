import {create} from 'zustand'

const useComponentsStore = create((set) => ({
    // 数据
    mode: 'edit',
    // 方法
    setMode: (type:any) => set(() => ({ mode :type}))
}))

export default useComponentsStore