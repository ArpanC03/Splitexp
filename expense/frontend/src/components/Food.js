import React from 'react'
import "./Food.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import NavClient from './NavClient'
function Food() {
  return (
    <div>
      <div>
        <NavClient/>
        </div>
      
    <div className='prdContainer'>
        <div className='prdlContainer'>
         <Link to="acost">ADD COST</Link>
         <Link to="dcost">DELETE COST</Link>
         <Link to="ucost">UPDATE COST</Link>
        </div>
        <div className='prdrContainer' style={{textAlign:"center",marginLeft:"500px"}}>
            <Outlet/>
            </div>
      
    </div>
    </div>
  )
}

export default Food