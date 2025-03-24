import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import NavClient from './NavClient'
// import './Super.css';
// import './Super1.css';
// import './Super3.css';    
// import './Super31.css'; 
// import './Super3.css';

// import './Super311.css'; 
// import './Super2.css';
// import './Super4.css';
// import './Super5.css';





function Billing() {
    let[user,setUser]=useState([]);
    useEffect(()=>{
       axios.get("http://localhost:1005/order/billing")
       .then((res)=>{
        console.log(res.data);
        setUser(res.data);
       })
       .catch((error)=>{
        console.log(error);
        alert("SOME THING WENT WRONG ON FETCHING DATA");
       })
    },[])
  return (
    <div>
        <NavClient/>
      <h2 className='text-primary'>AVAILABLE FINANCIAL DETAILS</h2>
      {
        user.length>0 ?
         <div style={{width:"100%",margin:"50px auto"}}> 
            <table className='table table-hover table-striped '>
                <thead className='table table-dark'>
                    <tr>
                    <td>EXPENSE ID</td>
                    <td>EXPENSE DATE</td>
                    <td>COST ID</td>
                    <td>COST NAME</td>
                    <td>NO OF EXPENSES</td>
                    <td>FINANCES</td>
                    <td>TOTAL SPENDINGS</td>
                    <td>USERNAME</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((element,index)=>{
                            return(
                                <tr>
                                    <td>{element[0]}</td>
                                    <td>{element[1]}</td>                                    
                                    <td>{element[2]}</td>
                                    <td>{element[3]}</td>
                                    <td>{element[4]}</td>
                                    <td>{element[5]}</td>
                                    <td>{element[6]}</td>
                                    <td>{element[7]}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
         </div> 
         :<h2 style={{color:"red"}}>NO DATA FOUND</h2>
      }
    </div>
  )
}
   

export default Billing