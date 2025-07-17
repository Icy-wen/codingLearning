import type{PropsWithChildren} from 'react'
//容器组件，允许放子结构
export default function Page({children}:PropsWithChildren) {
  return (
    <div className='h-[100%] box-border p-[20px]'>
      {children}
    </div>
  )
}
