import React from 'react'
import Navbar from '../components/navbar'
import "./Addnote.css"

const Addnote = () => {
    return (
        <div clas>
            <div>
                <Navbar />
            </div>
            <div className='createpost'>
                <div className='title_'>
                    <label htmlFor='Title'>Title</label>
                    <input id='Title' name='Title'/>
                </div>
                <div className='Description'>
                    <label htmlFor='Description'>Description</label>
                    <textarea  id='Description' name='Description'></textarea>
                </div>
                <div className='addButton'>
                <button>Add Note</button>
                </div>
              
            </div>


        </div>


    )
}

export default Addnote