import React, { useState } from 'react'
import "./Homepage.css"
import { useEffect } from 'react'
import Navbar from "../components/navbar"



const Homepage = () => {
  const [posts, setPosts] = useState([])
  console.log(posts)

  useEffect(() => {
    fetch("https://note-taker-api-fhnh.onrender.com/mynotes", {
      method: "get",
      headers: {
        "Authorization": "bearer " + localStorage.getItem("token")
      },

    }).then(res => res.json())
      .then(data => setPosts(data.posts))



  }, [])
  return (
    <div style={{backgroundColor:"black", width:"100%", height:"100vh", color:"white"}}>
      <div className='NavBox'>
      <Navbar/>
      </div>
    
      <div className='Search' >
        <input placeholder='search' />
        <button  >Search</button>
      </div>

      <div className='tasks'>
        <div  className='head'>
          <span style={{marginLeft:"20px"}}>March 1, 2023 1:13:21 PM</span>
        </div>
      
        <div  className='body'>
          <h3>Mongo Db</h3>
          <p>hi hello</p>
        
        </div>
      </div>

    </div>
  )
}

export default Homepage