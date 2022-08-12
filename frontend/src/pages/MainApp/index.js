import React from 'react'
import {Outlet , Routes, Route} from "react-router-dom"


const MainApp = () => {
  return (
    <div>
        <p>Header</p>
        <Outlet/>
        <p>footer</p>
    </div>
  )
}

export default MainApp;