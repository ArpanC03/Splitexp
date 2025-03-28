import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Nav from './Nav'

function AddFood() {
    let[food,setFood]=useState({
        fid:"",
        fname:"",
        price:""
    })
    let[msg,setmsg]=useState("");
    const addData=()=>{
        axios.post("http://localhost:1005/cost/add",food)
        .then((res)=>{
            console.log(res.data);
            setmsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG ADDING DATA");
        })
    }
    const refreshData=()=>{
        setmsg("");
        setFood({
            fid:"",
            fname:"",
            price:""
        })
    }
  return (
    <div>
      {/* <div style={{width:"200%",margin:"50px auto"}}><Nav/></div> */}
    <div style={{width:"150%",margin:"50px auto"}}>
      
      <h2 className='text-primary'>ADDING COST</h2>
      <input type="text" className='form-control' placeholder='ENTER THE COST ID'
      value={food.fid} onChange={(event)=>{
        setFood({
            ...food,
            fid:event.target.value
        })
      }}/><br/>
     <input type="text" className='form-control' placeholder='ENTER THE COST NAME'
      value={food.fname} onChange={(event)=>{
        setFood({
            ...food,
            fname:event.target.value
        })
      }}/>
    <br/>
     <input type="text" className='form-control' placeholder='ENTER THE EXPENSES'
      value={food.price} onChange={(event)=>{
        setFood({
            ...food,
            price:event.target.value
        })
      }}/><br/>
      <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
      onClick={addData}>ADD</button> &nbsp;&nbsp;
      <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
      onClick={refreshData}>REFRESH</button>
      <h2 className='text-danger'>{msg}</h2>
    </div></div>
  )
}

export default AddFood