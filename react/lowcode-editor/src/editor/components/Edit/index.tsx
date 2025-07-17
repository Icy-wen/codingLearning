import React, { useEffect } from 'react'
import { useComponentsStore } from '../../stores/components'
import type { Component } from '../../stores/components'
import { useComponentConfigStore } from '../../stores/component-config'

export default function EditArea() {
  const { components, addComponents} = useComponentsStore()
  const { componentsConfig } = useComponentConfigStore()

  useEffect(() => {
    addComponents({
      id: 2,
      name: 'Container',
      props: {},
      desc: '页面容器'
    }, 1)

    addComponents({
      id: 3,
      name: 'Button',
      props: {
        text: '提交'
      },
      desc: '按钮',
      children: []
    }, 2)

  }, [])

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
          ...config.defaultProps,
          ...component.props
        },
        renderComponents(component.children || [])  // 递归渲染整个 json 树
      )
    })
  }

  return (
    <div >
      {/* {renderComponents(components)} */}
      {/* <pre>
        {
          JSON.stringify(components, null, 2)
        }
      </pre> */}
      
    </div>
  )
}