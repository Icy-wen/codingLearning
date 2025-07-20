import{useComponentConfigStore} from '../../stores/component-config'
import {useMemo} from 'react'
import MaterialItem from '../MaterialItem'
import { useComponentsStore } from '../../stores/components'
export default function Materail() {
  const { componentsConfig } = useComponentConfigStore()
  const { components :componentsStore} = useComponentsStore()


  const components = useMemo(() => {
    return Object.values(componentsConfig)  .filter(item=>item.name!='Page')
  }, [componentsConfig])
  return (
    <div>
      {
        components.map((item,index)=>{
          return <MaterialItem key={item.name+index} name={item.name} />
        })
      }
      <pre>
        {JSON.stringify(componentsStore,null,2)}
      </pre>
    </div>
  )
}
