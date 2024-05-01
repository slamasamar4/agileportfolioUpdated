import React from 'react'
import Sidebar from './Sidebar.jsx'
import './Sidebar.css'
import profilePic from '../../src/imgs/elon.jpg'

const FullSideBar = () => { 
    
const FSideBar  =[
    {
    username:"elon Musk" ,
    email:"elonmusk@gmail.com"
}];



    return (
        <div>
        <div className='profile'>
            <Sidebar />
            <div className='user--profile'>
                <div className='user--detail'>
                    <img src={profilePic} alt="profile" />
                    <div className='studentNum'>
                    <h3 className='username'>{FSideBar.username}</h3>
                    <span className='email'>{FSideBar.email}</span>
                    </div>
                    
                </div>


                <div className='user-courses'></div>
            </div>
        </div>
        
    </div>
  
    )
}

export default FullSideBar
