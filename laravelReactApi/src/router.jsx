import React from 'react'
import Login from './layouts/login'
import 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Register from './layouts/register'
import GuestLayout from './components/guestLayout'
import Userlayout from './components/userlayout'
import User from './layouts/user'

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Userlayout />,
        children:[
            {
                path:'/user',
                element:<User/>            
            }
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default Router
