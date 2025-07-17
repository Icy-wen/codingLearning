import {create} from "zustand";
import Container from "../materials/Container";
import Button from "../materials/Button";
import Page from "../materials/Page";

export interface ComponentConfig{
    name:string,
    defaultProps: Record<string,any>;
    component:any;
}
export interface Action{
    registerComponent:(name:string,componentConfig:ComponentConfig)=>void;
}
export interface State{
    componentsConfig:{[key:string]:ComponentConfig}
}
//每一个名字对应的组件具体是哪一个
export const useComponentConfigStore=create<State&Action>(
    (set)=>({
        componentsConfig:{
            Container:{
                name:'Container',
                defaultProps:{},
                component:Container
            },
            Page:{
                name:'Page',
                defaultProps:{},
                component:Page
            },
            Button:{
                name:'Button',
                defaultProps:{},
                component:Button
            }
        },
        registerComponent:(name,componentConfig)=>{
            set((state)=>{
                return {
                    ...state,
                    componentsConfig:{
                        ...state.componentsConfig,
                        [name]:componentConfig
                    }
                }
            })
        }
        
    })
)