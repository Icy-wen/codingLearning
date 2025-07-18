import type { CommonComponentProps } from '../../interface';
import { useMaterialDrop } from '../../hooks/useMaterialDrop'

//容器组件，允许放子结构
export default function Container({children,id,name}:CommonComponentProps) {
  const {canDrop,dropRef,contextHolder}=useMaterialDrop(['Button', 'Container'],id);

  
  //能接收拖拽进来的组件
  return (
    <>
      {contextHolder}
      <div 
      data-component-id ={id}
      ref={dropRef} className= {`min-h-[100px] p-[20px] 
      ${(canDrop?`border-[2px] border-[blue]`:`border-[1px] border-[#000]`)}`}>
        {children}
      </div>
    </>
  )
}
