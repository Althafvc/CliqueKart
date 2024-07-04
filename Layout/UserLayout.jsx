import React from 'react'
import Navbar from '../src/Components/Navbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    <Navbar /> 
    <Outlet />
    </>
  )
}

export default UserLayout