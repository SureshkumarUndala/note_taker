import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from "axios"
import "./signup.css"

const Signup = () => {
  const [user, setUser] =useState({email:"", password:"", repeatpassword:""})

  const Navigate = useNavigate()


  const register = (e) =>{
    e.preventDefault()

    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regEx.test(user.email)){
      return alert("Invalid Email")
    }
    
    axios.post("https://note-taker-api-fhnh.onrender.com/register",user)
    .then((response)=>{
   
      alert(response.data.status)
      Navigate("/")
     
    })
    .catch((error)=>{
      alert(error.response.data.error)
    })
 
  }  

  return (
    <div className='container'>
         <div className='signupContainer' >
    <h4>SIGN UP</h4>
       <form onSubmit={register}>
           <div className='Email'>
               <label htmlFor='email'>Email</label>
               <input type="email" name='email'value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
             
           </div>
           <div className='password'>
           <label htmlFor='password'>Password</label>
               <input type="password" name='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />

           </div>
           <div className='confirm_password'>
           <label htmlFor='password'>Repeat Password</label>
            <input type="password" name='password'  value={user.repeatpassword} onChange={(e)=>setUser({...user,repeatpassword:e.target.value})}/>

           </div>
           <div className='checkbox'>
               <input type="checkbox" required/>
               <label htmlFor='checkbox'>I agree With Terms And Conditions</label>
           </div>
           <button className='searchButton'>Continue</button>
        
       </form>
   </div>


    </div>
   
   
  )
}

export default Signup