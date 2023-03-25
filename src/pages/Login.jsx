import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import Signup from './signup'
import axios from 'axios';


const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" })
  const Navigate = useNavigate()


  const login = (e) => {
    e.preventDefault()
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEx.test(user.email)) {
      return alert("Invalid Email")
    }

    axios.post("https://note-taker-api-fhnh.onrender.com/login", user)
      .then((response) => {
       
   
     


        localStorage.setItem("token", response.data.token)
       


        alert(response.data.message)
        Navigate("/homepage")

      })
      .catch((error) => {
        alert(error.response.data.error)
      })

  }
  return (

      <div className='LoginContainer'>
        <h4>Sign In</h4>
        <form onSubmit={login}>
          <div className='Email'>
            <label htmlFor='email'>Email</label>
            <input type="email" name='email' autoComplete='current-password' placeholder='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

          </div>
          <div className='password'>
            <label htmlFor='password'>Password</label>
            <input type="password" autoComplete='current-password' name='password' placeholder='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

          </div>
          <div className='checkbox'>
            <input type="checkbox" required />
            <label htmlFor='checkbox'> Rememeber Me</label>
          </div>
          <button className='submitbutton'>Submit</button>
        </form>
      
          <h5>if u dont have account then go to<Link to="/signup" element={<Signup />}> Sign Up</Link></h5>





      </div>



  )
}

export default Login