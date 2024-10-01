import React from 'react'
import one from './img/1.jpeg'
import two from './img/2.jpeg'
import three from './img/3.jpg'
import four from './img/4.jpg'

function Movie() {
    return (
        <div className="container">
    <div className="content-container"> 
        <div className="movie-list-container">
        <h1 className="movie-list-title">NEW REALEASES</h1>
        <div className="movie-list-wrapper">
            <div className="movie-list">
                <div className="movie-list-item">
                    <img src={one} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
                <div className="movie-list-item">
                    <img src={two} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
                <div className="movie-list-item">
                    <img src={three} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
                <div className="movie-list-item">
                    <img src={four} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
                <div className="movie-list-item">
                    <img src={one} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
                <div className="movie-list-item">
                    <img src={one} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
                <div className="movie-list-item">
                    <img src={one} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
                <div className="movie-list-item">
                    <img src={one} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">Her</span>
                    <p className="movie-list-item-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis inventore ut quod, eveniet incidunt accusantium accusamus nam sequi aperiam aspernatur.</p>
                    <button className="movie-list-item-button"> WATCH</button>
                </div>
            </div>
            <i className="fa-solid fa-arrow-right arrow"></i>
        </div>
</div>
</div></div>

    )
}

export default Movie
