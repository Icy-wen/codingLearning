import type{PropsWithChildren} from 'react'
//容器组件，允许放子结构
export default function Container({children}:PropsWithChildren) {
  return (
    <div className='border-[1px] border-[#000] min-h-[100px] p-[20px]'>
      {children}
    </div>
  )
}
