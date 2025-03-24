import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Nav from './Nav';
function FoodList() {
    let[user,setUser]=useState([]);
    useEffect(()=>{
       axios.get("http://localhost:1005/cost/fetch")
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
        <div><Nav/></div>
      <h2 className='text-primary'>AVAILABLE COST DETAILS</h2>
      {
        user.length>0 ?
         <div style={{width:"60%",margin:"50px auto"}}> 
            <table className='table table-hover table-striped '>
                <thead className='table table-dark'>
                    <tr>
                    <td>COST ID</td>
                    <td>COST NAME</td>
                    <td>PRICE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((element,index)=>{
                            return(
                                <tr>
                                    <td>{element.fid}</td>
                                    <td>{element.fname}</td>
                                    <td>{element.price}</td>
                                    
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
   

export default FoodList