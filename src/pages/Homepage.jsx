import React, { useState } from 'react'
import "./Homepage.css"
import { useEffect } from 'react'
import Navbar from "../components/navbar"



const Homepage = () => {
  const [posts, setPosts] = useState([])
  const [query, setquery] = useState('')
  console.log(posts)
  
  

  
  useEffect(() => {
    fetch("https://note-taker-api-fhnh.onrender.com/mynotes", {
      method: "get",
      headers: {
        "Authorization": "bearer " + localStorage.getItem("token")
      },

    }).then(res => res.json())
      .then(data => setPosts(data.posts))


  }, [posts])
  return (
    <div style={{width:"100%", height:"auto", color:"white", boxSizing:"border-box"}}>
      <div className='NavBox'>
      <Navbar/>
      </div>
    
      <div className='Search' >
        <input placeholder='search' onChange={(e)=>setquery(e.target.value)}/>
        <button  >Search</button>
      </div>

      <div className='tasks'>
      {/* {posts.filter(post=> post.title.toLowerCase().includes(query)).map(post=>{
    return(
      
    )
  })} */}
       
          {posts.filter(post=> post.title.toLowerCase().includes(query)).map((post,index)=>{
            return(
              <div  className='postBody' key={index}>
                <div  className='head'>
          <span style={{marginLeft:"20px"}}>{post.createdAt
}</span>
        </div>
      
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              </div>

            )

          })}
        
      
      </div>

    </div>
  )
}

export default Homepage