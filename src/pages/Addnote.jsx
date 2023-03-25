import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import "./Addnote.css"
import Homepage from './Homepage'

const Addnote = () => {

    const Navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] =  useState("")
  



    const addNote = async() =>{
        const addnotes = await  fetch("https://note-taker-api-fhnh.onrender.com/createnote",{
            method:"post", 
            headers:{
                "Content-Type": "application/json",
                "Authorization": "bearer "+localStorage.getItem("token")
            },
            body:JSON.stringify({
                title:title,
                description:description
            
            })

        }).then(res=>console.log(res.json())
       )
       Navigate("/homepage")

    }
  


    return (
        <div>
            <div>
                <Navbar />
            </div>

            
            <div className='createpost'>
                <div className='title_'>
                    <label htmlFor='Title'>Title</label>
                    <input id='Title' name='Title'  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='Description'>
                    <label htmlFor='Description'>Description</label>
                    <textarea  id='Description' name='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className='addButton'>
                <button onClick={addNote}>Add Note</button>
                </div>
              
            </div>


        </div>


    )
}

export default Addnote