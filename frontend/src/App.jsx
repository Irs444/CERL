import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Main from './components/main'
import Home from './components/main/Home'
import Signup from './components/main/Signup'
import Login from './components/main/Login'
import Contact from './components/main/Contact'

const App = () => {
  return (
   <div>
    <BrowserRouter>
    <SnackbarProvider>
    <Routes>
      <Route path='/' element={<Navigate to="/main/home"/>}/>
      <Route path='main' element={<Main/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </SnackbarProvider>
    </BrowserRouter>

   </div>
  )
}

export default App
