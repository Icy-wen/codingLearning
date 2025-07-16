import { Space, Button } from "antd"
import { useState } from "react"
import useComponentsStore from "../../stores/components.tsx"

export default function Header() {
    // 修复状态获取方式 - 直接获取mode值而非解构对象
    const mode = useComponentsStore((state: any) => state.mode)
  return (
    <div className="w-[100%] h-[100%]">
        <div className="h-[50px] flex justify-between items-center px-[20px]">
            <div>低代码编辑器</div>
            <Space>
                {mode === 'edit' && (
                    <Button type="primary" onClick={() => {
                        useComponentsStore.setState({ mode: 'preview' })
                    }}>预览</Button>
                )}
                {mode === 'preview' && (
                    <Button type="primary" onClick={() => {
                        useComponentsStore.setState({ mode: 'edit' })
                    }}>退出预览</Button>
                )}
            </Space>
        </div>
    </div>
  )
}
