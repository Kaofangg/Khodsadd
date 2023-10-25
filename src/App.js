import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Read from './Read'
import Update from './Update'
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
            <Route path='/read/:id' element={<Read />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App