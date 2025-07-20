import { create } from 'zustand'
import type { CSSProperties } from 'react'

export interface State {
    components: Component[],
    curComponentId:number|null,
    curComponent:Component|null,

}
export interface Action {
    addComponents: (component: any, parentId: number) => void
    deleteComponents: (componentId: number) => void;
    updateComponents: (componentId: number, props: any) => void;//更新组件属性
    updateComponentsStyle: (componentId: number, styles: CSSProperties) => void;
}
export interface Component {
    id: number,
    name: string,
    props: any,
    styles?:CSSProperties,
    desc: string,
    children?: Component[],
    parentId?: number
}
export const useComponentsStore = create<State & Action>(
    (set,get) => ({
        // 数据
        components: [//整个项目的json树
            {
                id: 1,
                name: 'Page',
                props: {},
                desc: '页面'
            }
        ],
        curComponentId:null,
        curComponent:null,
        // 方法
        //本质上就是要将一个对象添加到另一个对象中
        addComponents: (component: any, parentId: number) => {
            set((state)=>{
                if(parentId){
                    //获取到父级对象
                    const parentComponent= getComponentById(parentId,state.components);
                    if(parentComponent){
                        if(parentComponent.children){
                            parentComponent.children.push(component);
                        }else{
                            parentComponent.children=[component];
                        }
                    }
                    component.parentId=parentId;
                    return{
                        components:[...state.components]
                    }
                }
                return {
                    components:[...state.components,component]
                }
            })
        },
        //根据componentId找到它的父容器删除子容器id为componentId的组件
        deleteComponents: (componentId: number) => {
            if(!componentId) return 
            const component=getComponentById(componentId,get().components);//找到要删除的组件
            if(component?.parentId){
                const parentComponent=getComponentById(component.parentId,get().components);
                if(parentComponent?.children){
                    parentComponent.children=parentComponent.children.filter((item)=>item.id!==componentId);
                }
            }
            //触发视图更新
            set({
                components:[...get().components]
            })
        },
        updateComponents: (componentId: number, props: any) => {
            set((state)=>{
                const component=getComponentById(componentId,state.components);
                if(component){
                    component.props={...component.props,...props};
                    return{
                        components:[...state.components]
                    }
                }
                return{
                        components:[...state.components]
                }
            })
        },
        updateComponentsStyle: (componentId: number, styles: CSSProperties) => {
            set((state)=>{
                const component=getComponentById(componentId,state.components);
                if(component){
                    component.styles={...component.styles,...styles};
                    return{
                        components:[...state.components]
                    }
                }
                return{
                        components:[...state.components]
                }
            })
        }, 
        setCurComponentId: (componentId: number) => {
            set((state)=>({
                curComponentId:componentId,
                curComponent:getComponentById(componentId,state.components)
            }))
        },
    })
)



//根据id拿到json对象结构里的组件
export function getComponentById(id: number|null, components: Component[]): Component | null {
   if(!id){
    return null;
   }
   for(const component of components){
    if(component.id === id){
        return component;
    }
    if(component.children&&component.children.length>0){
        const result= getComponentById(id,component.children);
        if(result){
            return result;
        }
    }

   }
   return null;
}