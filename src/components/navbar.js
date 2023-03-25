import React from 'react'
import { FaPlus } from "react-icons/fa"
import { Link, useNavigate} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { FaRegWindowClose } from "react-icons/fa"
import { FaFileExport } from "react-icons/fa"
import "./navbar.css"


const Navbar = () => {
    const Navigate = useNavigate()

    const logOut = ()=>{
        localStorage.removeItem("token")
        Navigate("/")
    

    }

    const Deleteall = () => {
    
        fetch("https://note-taker-api-fhnh.onrender.com/deleteall",{
            method:"delete", 
            headers:{
                "Content-Type": "application/json",
                "Authorization": "bearer "+localStorage.getItem("token")
            },
          

        }).then(res=>res.json())
        .catch(err=>console.log(err))
    }
    return (
        <div className='NavContainer'>
            <div className='Home' onClick={()=>Navigate("/homepage")}>
                <FaHome />
                <h4 > Home</h4>
            </div>

            <div className='Addpost' onClick={()=>Navigate("/addnote")}> <FaPlus />
                <h4>Add</h4>
            </div>
            <div className='Delete' onClick={Deleteall}> <FaRegWindowClose />
                <h4>Delete</h4>
            </div>
            <div className='export'> <FaFileExport />
                <h4>Export</h4>
            </div>
            <div >
                <button onClick={logOut} style={{backgroundColor:"black", color:"white", padding:"10px 10px" }}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar