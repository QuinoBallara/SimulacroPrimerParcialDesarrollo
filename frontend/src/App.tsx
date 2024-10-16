import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Details } from './components/Details/Details'
import { AddGame } from './components/AddGame/AddGame'
import { ThemeContext, ThemeContextProvider } from './context/ThemeContext'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/addGame',
      element: <AddGame />
    },
    {
      path: '/game/:id',
      element: <Details />
    }
  ])

  return (
    <div>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </div>
  )
}

export default App
