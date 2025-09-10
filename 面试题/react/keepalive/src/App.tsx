import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import KeepAlive from './keepAlive'


const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]

const router=createBrowserRouter(routes)
export default function App() {

  return (
    <div>
      <KeepAlive keepPath={['/home','about']}>
        <RouterProvider router={router} />
      </KeepAlive>
    </div>
  )
}


