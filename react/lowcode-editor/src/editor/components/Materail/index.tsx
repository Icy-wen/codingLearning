import{useComponentConfigStore} from '../../stores/component-config'
import {useMemo} from 'react'
import MaterialItem from '../MaterialItem'

export default function Materail() {
  const { componentsConfig } = useComponentConfigStore()
  const components = useMemo(() => {
    return Object.values(componentsConfig)  
  }, [componentsConfig])
  return (
    <div>
      {
        components.map((item,index)=>{
          return <MaterialItem key={item.name+index} name={item.name} />
        })
      }
    </div>
  )
}
