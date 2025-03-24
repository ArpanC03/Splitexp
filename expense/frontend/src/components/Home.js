import React from 'react'

import { useNavigate } from 'react-router-dom'

function Home() {
    var navigate=useNavigate();
  return (
    <div>
      <h2 className='text-primary'>SPENT ANALYSIS SYSTEM</h2>
      <img src="https://decentro.tech/blog/wp-content/uploads/Splitkaro-Case-Study-2.jpeg"
      height={400}
      width={900}
      alt="NO IMG"/><br/><br/>
      <button className='btn btn-outline-success' onClick={()=>{
        navigate("/register")
      }}>REGISTER</button>&nbsp;&nbsp;
      <button className='btn btn-outline-secondary' onClick={()=>{
        navigate("/login")
      }}>LOGIN</button>
    </div>
  )
}

export default Home
