import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Register() {
    let[register,setRegister]=useState({
        uname:"",
        pass:"",
        nm:"",
        email:"",
        phno:""
    })
    let[msg,setmsg]=useState("");
    var navigate=useNavigate();

    const addData=()=>{
        axios.post("http://localhost:1005/register/add",register)
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
        setRegister({
            uname:"",
            pass:"",
            nm:"",
            email:"",
            phno:""
        })
    }

  return (
    <div style={{width:"30%",margin:"50px auto"}} >
      <h2 className='text-white bg-dark'>REGISTRATION FORM</h2><br/>
      <input type="text" className='form-control' placeholder='ENTER THE USER NAME'
      value={register.uname} onChange={(event)=>{
        setRegister({
            ...register,
            uname:event.target.value
        })
      }}/><br/>
     <input type="password" className='form-control' placeholder='ENTER THE PASSWORD'
      value={register.pass} onChange={(event)=>{
        setRegister({
            ...register,
            pass:event.target.value
        })
      }}/>
    <br/>
     <input type="text" className='form-control' placeholder='ENTER THE NAME'
      value={register.nm} onChange={(event)=>{
        setRegister({
            ...register,
            nm:event.target.value
        })
      }}/><br/>
      <input type="text" className='form-control' placeholder='ENTER THE email'
      value={register.email} onChange={(event)=>{
        setRegister({
            ...register,
            email:event.target.value
        })
      }}/><br/>
      <input type="text" className='form-control' placeholder='ENTER THE PHNO'
      value={register.phno} onChange={(event)=>{
        setRegister({
            ...register,
            phno:event.target.value
        })
      }}/><br/>
      <button className='btn btn-outline-success' style={{marginTop:"5px"}}
      onClick={addData}>SIGNUP</button> &nbsp;&nbsp;
      
      <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
      onClick={refreshData}>REFRESH</button>&nbsp;&nbsp;

      <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
      onClick={()=>{
        navigate("/")
      }}>HOME</button> <br/>
      <h2 className='text-danger'>{msg}</h2>
    </div>
  )
}

export default Register
