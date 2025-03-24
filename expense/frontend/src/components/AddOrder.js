import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import NavClient from './NavClient'


function AddOrder() {
    let[order,setOrder]=useState({
        fid:"",
        oqty:"",
        uname:""
    })
    let[msg,setmsg]=useState("");
    const addData=()=>{
        axios.post("http://localhost:1005/order/add",order)
        .then((res)=>{
            console.log(res.data);
            setmsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG ADDING EXPENSES");
        })
    }
    const refreshData=()=>{
        setmsg("");
        setOrder({
            fid:"",
            oqty:"",
            uname:""

        })
    }
  return (
    <div style={{width:"100%",margin:"50px auto"}}>
    <NavClient/>
    <div style={{width:"70%",margin:"50px auto"}}>
      <h2 className='text-primary'>ADDING EXPENSES</h2>
      <input type="text" className='form-control' placeholder='ENTER THE COST ID'
      value={order.fid} onChange={(event)=>{
        setOrder({
            ...order,
            fid:event.target.value
        })
      }}/><br/>
     
      <input type="text" className='form-control' placeholder='ENTER No of Lots '
      value={order.oqty} onChange={(event)=>{
        setOrder({
            ...order,
            oqty:event.target.value
        })
      }}/><br/>
      
      <input type="text" className='form-control' placeholder='ENTER THE UNAME'
      value={order.uname} onChange={(event)=>{
        setOrder({
            ...order,
            uname:event.target.value
        })
      }}/>
    <br/>
     
      <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
      onClick={addData}>ADD</button> &nbsp;&nbsp;
      <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
      onClick={refreshData}>REFRESH</button>
      <h2 className='text-danger'>{msg}</h2>
    </div>
    </div>
  )
}

export default AddOrder