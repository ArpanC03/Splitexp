import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navContainer'>
      
        <div className='navltContainer'>
          <h2  className='text-primary'><a  href="/navclient">COST APP</a></h2>
        </div>
        <div className='navrtContainer'>
           <a href="/cost">COST</a>
           <a href="/flist">FINANCES</a>
           <a href="/scost">SEARCH_Exp</a>
           {/* <a href="/contact">BUDGET</a> */}
           
        </div>
      
    </div>
  )
}

export default Nav