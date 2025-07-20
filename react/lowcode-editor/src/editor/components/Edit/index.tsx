import React from 'react'
import { useComponentsStore } from '../../stores/components'
import type { Component } from '../../stores/components'
import { useComponentConfigStore } from '../../stores/component-config'
import { useState } from 'react'
import HoverMask from '../HoverMask'
import SelectedMask from '../SelectedMask'

export default function EditArea() {
  const { components,setCurComponentId,curComponentId} = useComponentsStore()

  const { componentsConfig } = useComponentConfigStore()
  const [hoverComponentId, setHoverComponentId] = useState<number>()



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
          styles:component.style,
          ...component.props
        },
        renderComponents(component.children || [])  // 递归渲染整个 json 树
      )
    })
  }
  const handleMouseOver: React.MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath()
    for (let i = 0; i < path.length; i++) {
      const ele = path[i] as HTMLElement
      const componentId = ele.dataset&&ele.dataset.componentId
      //console.log(componentId);


      if (componentId) {
        setHoverComponentId(+componentId)
        return
      }
    }

  }
  //借助冒泡机制，点击页面上的任意组件，点击行为都会冒泡到这里
  const handleClick: React.MouseEventHandler = (e)=>{
    //console.log(e.nativeEvent.composedPath());
    const path = e.nativeEvent.composedPath()
    for (let i = 0; i < path.length; i++) {
      const ele = path[i] as HTMLElement
      const componentId = ele.dataset&&ele.dataset.componentId
      //console.log(componentId);
      if (componentId) {
        setCurComponentId(+componentId)
        return
      }
    }
  }
  return (
    //所有事件都会冒泡到这里
    <div className='h-[100%] edit-area'
      onMouseOver={handleMouseOver}
      onMouseOut={() => setHoverComponentId(undefined)}
      onClick={handleClick}>
        
      {renderComponents(components)}
      {hoverComponentId &&hoverComponentId!==curComponentId&& (
        <HoverMask componentId={hoverComponentId}
          containerClassName='edit-area'
          portalWrapperClassName='portal-wrapper'></HoverMask>
      )}
      {curComponentId && (
        <SelectedMask 
          containerClassName='edit-area'
          portalWrapperClassName='portal-wrapper'
          componentId={curComponentId}
        ></SelectedMask>
      )}
      <div className="portal-wrapper"></div>
    </div>
  )
}