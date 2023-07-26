import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchImage from '../modules/Home/components/SearchImage'

const MainLayout = () => {
  
  return (
    <>
        
        <div>
            <SearchImage />
        </div>
        {/* Phần body là nơi các routes được render ra */}
        < Outlet />
        {/* <div>
            <h1>Footer</h1>
        </div> */}
        
    </>
  )
}

export default MainLayout