import React from 'react'
import {Outlet , Routes, Route} from "react-router-dom"
import { Header, Footer } from '../../components/molecules';
import "./mainApp.scss"

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
      <Header/>
      <div className='content-wrapper'>
          <Outlet/>
      </div>
        <Footer/>
    </div>
  )
}

export default MainApp;