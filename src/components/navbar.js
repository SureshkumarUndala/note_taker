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
        Navigate("/")

    }
    return (
        <div className='NavContainer'>
            <div className='Home'>
                <FaHome />
                <h4>Home</h4>
            </div>

            <div className='Addpost'> <FaPlus />
                <h4>Add</h4>
            </div>
            <div className='Delete'> <FaRegWindowClose />
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