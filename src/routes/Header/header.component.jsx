import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <>
        <button onClick = {() => navigate('.')}> 
            <span style = {{fontWeight: 900, fontSize: 23}} > Welcome to the world </span>
        </button>
        {/* <div>Header</div> */}
        <Outlet />
    </>
  )
}

export default Header