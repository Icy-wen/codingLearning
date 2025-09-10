import { createContext ,useContext} from 'react'
import { useOutlet,useLocation, matchPath } from 'react-router-dom'



interface KeepAliveProps{
    keepPath:string[]
    children:React.ReactNode

}
const keepElements:Record<string,React.ReactNode>={}
//用来缓存组件的对象
const KeepAliveContext=createContext({//useContext可以识别的对象
    keepPath:[] as string[],
    keepElements,
    dropByPath(path:string){
        keepElements[path]=null
    }
})
export default function KeepAlive(props:KeepAliveProps) {
    const {keepPath}=props
    const {keepElements,dropByPath}=useContext(KeepAliveContext)
  return (
    <KeepAliveContext.Provider value={{keepPath,keepElements,dropByPath}}>
        {props.children}
    </KeepAliveContext.Provider>
  )
}
const isKeepPath=(keepPath:string[],path:string)=>{
    return keepPath.includes(path)
}

export function useKeepOutlet(){
    const location=useLocation()
    const element=useOutlet()//拿到展示的虚拟dom
    //console.log(element);

    
    const {keepElements,keepPath}=useContext(KeepAliveContext)
    const isKeep=isKeepPath(keepPath,location.pathname)//当前展示的组件是否要被缓存  
    if(isKeep){//如果要被缓存
       keepElements[location.pathname]=element
    }
    
    return <>
    {Object.entries(keepElements).map(([pathname,element])=>{
        return <div key={pathname}
            className='keep-alive-map'
            style={{overflow:'hidden'}}
            hidden={!matchPath(location.pathname,pathname)}
            >
            {element}
        </div>
    })}
    {!isKeep&&element}

    </>

}