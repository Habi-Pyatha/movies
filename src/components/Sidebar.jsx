import React from 'react'
import './css/style.css'
import Navbar from './Navbar'
function Sidebar() {
    return (
        <>
        <Navbar/>
        <div className="left-menu-item sidebar">
    <i className="left-menu-item fa-solid fa-house"></i>
    <i className="left-menu-item fa-solid fa-magnifying-glass"></i>
    <i className="left-menu-item fa-regular fa-user"></i>
    <i className="left-menu-item fa-regular fa-bookmark"></i>
    <i className="left-menu-item fa-solid fa-tv"></i>
    <i className="left-menu-item fa-regular fa-hourglass"></i>
    <i className="left-menu-item fa-solid fa-cart-shopping"></i>
</div>
        </>
    )
}

export default Sidebar
