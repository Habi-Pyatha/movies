import React, { useCallback, useEffect, useState } from 'react'
import Movielist from './Movielist';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { selectMovies } from '../redux/movieSlice';
import { fetchMovies } from '../redux/movieSlice';
const BASE_URL="https://api.themoviedb.org/3"
function Movie() {
    
    // const [movies,setMovies]=useState([])
    const [category,setCategory]=useState('now_playing')
    const dispatch=useDispatch()
    const movies=useSelector(selectMovies);
    
    
    const categoryChange=useCallback((e)=>setCategory(e.target.value),[])
    useEffect(()=>{
        const loadMovies = async () => {
            try {
              const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
              if (!response.ok) {
                throw new Error('Failed to fetch movies');
              }
              const data = await response.json();
            //   console.log(data);
              // setMovies(data.results);
              dispatch(fetchMovies(data.results)) //sends as payload to movieSlice
              return data.results;
            } catch (error) {
              console.error('Error fetching movies:', error);
              return [];
            }
          };
          loadMovies();
    },[category])
    



    
    return (
        <>
        
    <Navbar />
        <div className="container">
    <div className="content-container"> 
        <div className="movie-list-container">
        <h1 className="movie-list-title">{category}</h1>
        
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
                      
                        <Link to={`/moviedetail/${item.id}`} key={item.id || index}>
                       <Movielist title={item.title} description={item.overview} image={item.poster_path} index={index} key={index}/>
                       </Link>
                    ))
                }

                
            </div>
            <i className="fa-solid fa-arrow-right arrow"></i>
        </div>
</div>
</div></div>


        </>
       

    )
}

export default Movie
