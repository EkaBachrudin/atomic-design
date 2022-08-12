import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainApp  from '../../pages/MainApp'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import CreateBlog from "../../pages/CreateBlog"
import DetailBlog from "../../pages/DetailBlog"
import Home from "../../pages/Home"
const RoutesConf = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/' element={<MainApp/>}>
                <Route  path="/" element={<Home/>}/>
                <Route path='create-blog' element={<CreateBlog/>}/>
                <Route path='detail-blog' element={<DetailBlog/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesConf