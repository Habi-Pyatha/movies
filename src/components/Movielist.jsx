import React from 'react'

function Movielist({title,description,image}) {
  return (
    
    <div>
        <div className="movie-list-item">
                    <img src={`https://image.tmdb.org/t/p/w200${image}`} alt="" className="movie-list-item-image"/>
                    <span className="movie-list-item-title">{title}</span>
                    <p className="movie-list-item-desc">{description}</p>
                    <button className="movie-list-item-button"> WATCH</button>
        </div>
      
    </div>
  )
}

export default Movielist
