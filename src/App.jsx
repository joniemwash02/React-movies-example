import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import{Routes, Route} from "react-router-dom"
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />

        

      </Routes>

    </>
  )
}

export default App
