import{useComponentConfigStore} from '../../stores/component-config'
import {useMemo} from 'react'
export default function Materail() {
  const { componentsConfig } = useComponentConfigStore()
  const components = useMemo(() => {
    return Object.values(componentsConfig)  
  }, [componentsConfig])
  return (
    <div>
      {
        components.map((item)=>{
          return <div key={item.name}
          className='border-dashed
          border-[1px]
          border-[#000]
          py-[8px]
          px-[10px]
          inline-block
          bg-white
          m-[10px]
          cursor-pointer
          hover:bg-[#ccc]
          '
          >{item.name}</div>
        })
      }
    </div>
  )
}
