import React from 'react'
import "./Nav.css"
function NavClient() {
  return (
    <div className='navContainer'>
      
        <div className='navltContainer'>
          <h2 className='text-primary'><a href="/navclient">EXPENSE APP</a></h2>
        </div>
        <div className='navrtContainer'>
           <a href="/elist">EXPENSES_LIST</a>
           <a href="/cost">COST</a>
           <a href="/slist">SEARCH_EXPENSES</a>
           <a href="/addorder">ADD_EXPENSES</a>
           <a href="/billing">TOTAL_SPENDINGS</a>
           
        </div>
      
    </div>
  )
}

export default NavClient