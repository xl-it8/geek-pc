import React from 'react';
import './App.scss'
import Layout from '@/pages/Layout'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { useRoutes, Navigate } from 'react-router-dom'
export default function App() {
  const element = useRoutes([
    {
      path: '/',
      //实现重定向 Navigate
      element: <Navigate to='/home' />
    },
    {
      path: '/home',
      element: <Layout />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '',
      element: <NotFound />
    }
  ])
  return (
    <div className='app'>
      {element}
    </div>
  )
}
