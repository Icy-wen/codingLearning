import React from 'react'
import { Outlet ,Link,useLocation} from 'react-router-dom'
import { useKeepOutlet } from '../keepAlive'

export default function Layout() {
    const location=useLocation()
    const element=useKeepOutlet()
    //console.log(element);

    
  return (
    <div>
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
        <div>当前路由:{location.pathname}</div>

        {element}
    </div>
  )
}
