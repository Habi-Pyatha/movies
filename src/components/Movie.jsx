import React, { useCallback, useEffect, useState } from 'react'
import Movielist from './Movielist';
 
const BASE_URL="https://api.themoviedb.org/3"
function Movie() {
    // const fetch=require('node-fetch');
    // 
    // console.log(`${process.env.MOVIE_API_KEY}`);
    // const [title,setTitle]=useState('')
    // const[description,setDescription]=useState('')
    const [movies,setMovies]=useState([])
    const [category,setCategory]=useState('popular')
    
    // setCategory=useCallback((function categoryChange(e){
    //     return(e.target.value)
    // }),[categoryChange])
    function categoryChange(e){
        return(e.target.value)
    }
    useEffect(()=>{
        const loadMovies = async () => {
            try {
              const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
              if (!response.ok) {
                throw new Error('Failed to fetch movies');
              }
              const data = await response.json();
            //   console.log(data);
              setMovies(data.results);
              
              
            //   <Movielist title:{data.result.} description:{}/>
              return data.results;
            } catch (error) {
              console.error('Error fetching movies:', error);
              return [];
            }
          };
          loadMovies();
    },[category])
    



    // const url=`${BASE_URL}movie/popular?language=en-US&page=1&api_key=${process.env.MOVIE_API_KEY}`;
   
    // const options={method:'GET',headers:{accept:'application/json'}};
    // const [title,setTitle]=useState('')
    // const[description,setDescription]=useState('')
    // useEffect(()=>{
    //     fetch(url,options)
    //     .then(res=>res.json())
    //     .then(json=>{
    //         // console.log(json["results"][0]["original-title"]);
    //         console.log(json);
            
             

    //     })
    //     .catch(err=>console.error('error:'+err));
        

    // })

    
    // useEffect
    return (
        <div className="container">
    <div className="content-container"> 
        <div className="movie-list-container">
        <h1 className="movie-list-title">{category}</h1>
        {/* <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
            <a href="#" value="now_playing">Now Playing</a>
            <a href="#" value="popular">Popular</a>
            <a href="#" value="top_rated">Trending</a>
            <a href="#" value="upcoming">Upcoming</a>
        </div>
        </div> */}

        <select onChange={categoryChange}>

        <option value="now_playing">Now Playing</option>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
        
        </select>


        <div className="movie-list-wrapper">
            <div className="movie-list">
                {
                    movies?.map((item,index)=> (
                       <Movielist title={item.title} description={item.overview} image={item.poster_path} index={index} key={index}/>
                    ))
                }

                {/* <Movielist title:{movieAPI.original_title} description:{movieAPI.overview}  */}
                {/* <div className="movie-list-item">
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
                </div> */}
            </div>
            <i className="fa-solid fa-arrow-right arrow"></i>
        </div>
</div>
</div></div>

    )
}

export default Movie
