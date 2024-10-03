import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchDescriptions, fetchReviews, selectDescription, selectReview } from '../redux/reviewSlice';
// import ReviewForm from './ReviewForm';
import PostReview from './PostReview'

const BASE_URL="https://api.themoviedb.org/3"

const Moviedetails = () => {
  // const [movie,setMovie]=useState([])
  // const [review,setReview]=useState([])
  const movie=useSelector(selectDescription)
  const review=useSelector(selectReview)
  const dispatch=useDispatch()
    let { movieId } = useParams();
    useEffect(()=>{
      const loadMovies = async () => {
        
          try {
            const response = await fetch(`${BASE_URL}/movie/${movieId}?language=en-US&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
            if (!response.ok) {
              throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
          //   console.log(data);
            // setMovie(data);
            dispatch(fetchDescriptions(data));
            
            
          
            return data;
          } catch (error) {
            console.error('Error fetching movies:', error);
            return [];
          }
        };
        loadMovies();
  },[movieId,dispatch]) //use effect finish
  
  useEffect(()=>{
    const loadReview=async()=>{
        try{
        
          const response=await fetch(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
          if(!response.ok){
            throw new Error("Failed to Fetch Reviews") ;
          }
          const data=await response.json();
          // setReview(data.results);
          // return(data.results);
          dispatch(fetchReviews(data.results));
        }
        catch(error){
          console.error("Error Fetching Review",error);
          return []
        }
    };//async end
    loadReview();
  },[movieId,dispatch])//useEffect end

  
  

  // const back=document.getElementById('title-overview')
  // back.style.backgroundImage=url(`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`)
  return (
    <>
    <Navbar />
    <div>
      <div className="outer">
         <div className="detail-image">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" className="movie-list-item-image"/>
      {/* <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt="" className="movie-list-item-image"/> */}
      </div>
      
      <div className="title-overview">
        <h1>
        { movie.original_title}
        </h1>
       
        <p>{movie.overview}</p>
            
       </div>
      
      </div>
      {
        
        review?.map((item,index)=>{
         return <Review author={item.author} content={item.content} rating={item.author_details.rating} key={index} />
        })
      }
{/* {movieId} */}

        
    </div>
    {/* <ReviewForm movieTitle={movie.original_title}/> */}
    <PostReview movieTitle={movie.original_title}/>
    {/* <ReviewForm/> */}
    
    </>
  )
}

export default Moviedetails
