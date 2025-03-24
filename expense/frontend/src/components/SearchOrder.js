import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Nav from './Nav'
import NavClient from './NavClient'

function SearchOrder() {
    let[food,setFood]=useState({
        fid:"",
        fname:"",
        price:""
    })
    let[data,setData]=useState({
        fid:"",
        fname:"",
        price:""
    })
    const searchData=(fid)=>{
        alert(fid);
        axios.get(`http://localhost:1005/cost/fetch/${fid}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG SEARCHING DATA");
        })
    }
    
  return (
    <div>
        <div>
            <NavClient/>
        </div>
    <div style={{width:"70%",margin:"50px auto"}}>
      <h2 className='text-primary'>Search Spendings</h2>
      <input type="text" className='form-control' placeholder='ENTER THE COST ID'
      value={food.fid} onChange={(event)=>{
        setFood({
            ...food,
            fid:event.target.value
        })
      }}/>
     
     <br/>
    
      <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
      onClick={()=>{
        searchData(food.fid)
      }}>SEARCH</button> &nbsp;&nbsp;
      

      <div>        
         <div style={{width:"60%",margin:"50px auto"}}> 
            <table className='table table-hover table-bordered '>
                <thead className='table table-dark'>
                    <tr>
                    <th>COST ID</th>
                    <th>COST DETAILS</th>
                    <th>SPENT</th>
                    </tr>
                </thead>
                <tbody>
                   
                                <tr>
                                    <td>{data.fid}</td>
                                    <td>{data.fname}</td>
                                    <td>{data.price}</td>
                                    
                                </tr>
                         
                </tbody>
            </table>
         </div> 
         
      
    </div>

    </div></div>
  )
}

export default SearchOrder