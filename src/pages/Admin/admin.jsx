import React from 'react'
import { Outlet } from 'react-router'

const Admin = () => {
  return (
    <div>
        header
        sidebar
        <Outlet />
    </div>
  )
}

export default Admin