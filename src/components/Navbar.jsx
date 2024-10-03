import React from 'react'

import './css/style.css'

import profile from './img/profile.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div className="navbar">
    <div className="navbar-container">
        <div className="logo-container"><Link to='/' className='no-underline'><h1 className="logo">Movies</h1></Link></div>
        <div className="menu-container">
            <ul className="menu-list">
                <li className="menu-list-item"><Link className='no-underline' to="/">Home</Link></li>
                <li className="menu-list-item"><Link className='no-underline' to={`/movies`}>Movies</Link></li>
                <li className="menu-list-item"><Link className='no-underline' to="/sidebar">Series</Link></li>
                <li className="menu-list-item"><Link to="/">Popular</Link></li>
                <li className="menu-list-item"><Link to="/">Trends</Link></li>
                
            </ul>
        </div>
        {/* <div className="profile-container">
            <img src={profile} alt="profilepics" className="profile-picture"/>
            <div className="profile-text-container">
                <span className="profile-text">Profile</span>
                <i className="fa-solid fa-circle-chevron-down"></i>
            </div>
            <div className="toggle">
                <i className="fa-solid fa-moon toogle-icon"></i>
                <i className="fa-regular fa-sun toogle-icon"></i>
                <div className="toggle-ball"> </div>
            </div>
        </div> */}
    </div>
   </div>
        </>
    )
}

export default Navbar
