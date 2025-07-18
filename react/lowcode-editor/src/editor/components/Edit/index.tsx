import React from 'react'
import { useComponentsStore } from '../../stores/components'
import type { Component } from '../../stores/components'
import { useComponentConfigStore } from '../../stores/component-config'
import { useState } from 'react'
import HoverMask from '../HoverMask'

export default function EditArea() {
  const { components, addComponents} = useComponentsStore()
  const { componentsConfig } = useComponentConfigStore()
  const [hoverComponentId,setHoverComponentId]=useState<number>()
 

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentsConfig?.[component.name]
      if (!config?.component) { // 没有对应的组件，比如：'Page'
        return null
      }
      // 渲染组件
      return React.createElement(
        config.component,
        {
          key: component.id,
          id: component.id,
          name: component.name,
          ...config.defaultProps,
          ...component.props
        },
        renderComponents(component.children || [])  // 递归渲染整个 json 树
      )
    })
  }
  const handleMouseOver:React.MouseEventHandler=(e)=>{
    const path=e.nativeEvent.composedPath()
    for(let i=0;i<path.length;i++){
      const ele=path[i] as HTMLElement
      const componentId=ele.dataset.componentId
      //console.log(componentId);

      
      if(componentId){
        setHoverComponentId(+componentId)
        return
      }
    }
    
  }
  return (
    <div className='h-[100%] edit-area' onMouseOver={handleMouseOver} onMouseOut={()=>setHoverComponentId(undefined)}>
      
      {renderComponents(components)}
      {hoverComponentId&&(
        <HoverMask componentId={hoverComponentId} 
        containerClassName='edit-area'
        portalWrapperClassName='portal-wrapper'></HoverMask>
      )}
      <div className="portal-wrapper"></div>
  </div>
  )
}