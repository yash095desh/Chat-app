import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Chat' element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App