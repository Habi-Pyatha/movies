import React from 'react'
import ft from './img/f-t-1.png'
import f1 from './img/f-1.jpg'
import './css/style.css'
function Featured() {
    return (
        <>
        {/* <div className="container"> */}
        <div className="content-container">
        <div className="featured-content"
        style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${f1})`,
            backgroundSize: 'cover'
        }}
        // 
        >
            <img src={ft} alt="" className="featured-title"/>
            <p className="featured-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eligendi magnam obcaecati ad ab officia perferendis cupiditate magni voluptatum asperiores, dicta repellat molestias iste deleniti perspiciatis provident consequuntur facilis! Quibusdam?</p>
            <button className="featured-button">WATCH</button>
        </div>
        </div>
        {/* </div> */}
        </>
    )
}

export default Featured
