import type { CommonComponentProps } from '../../interface'
import { message } from 'antd'
import { useMaterialDrop } from '../../hooks/useMaterialDrop'


export default function Page({ children, id, name }: CommonComponentProps) {

  const { canDrop, dropRef, contextHolder } = useMaterialDrop(['Button', 'Container', 'Page'], id);




  return (
    <>
      {contextHolder}
      <div
        data-component-id={id}
        ref={dropRef} className='p-[20px] h-[100%] box-border'
        style={{ border: canDrop ? '2px solid blue' : 'none' }}
      >
        {children}
      </div>
    </>
  )
}