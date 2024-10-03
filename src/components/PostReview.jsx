import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addReview, selectReview } from '../redux/reviewSlice'
// import Review from './Review'
import { useState } from 'react'

function PostReview({movieTitle}) { 
    const dispatch=useDispatch();
    const [rate,setRate]  = useState(5);
    const reviews=useSelector(selectReview);
    
    const myReviewSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const rating=Number(e.target.rating.value);
        const review=e.target.review.value;
        const newReview={name,rating,review};
        const reviewObject={
            author:name,
            author_details:{
                rating:rating
            },
            content:review, 
        }
        console.log(reviewObject);
        console.log(e.target);
        e.target.reset();
        
        dispatch(addReview([...reviews,reviewObject]));

        // setReviews((prevState)=>({
        //     reviews:[...prevState.reviews,newReview],
            
        //   }
        
        // ))
        // setSubmitted(true)
        console.log(reviews);
        
    }


//     const options = {
//     method: 'POST',
//     headers: {
//       accept: 'application/json',
//       'Content-Type': 'application/json;charset=utf-8',
//       Authorization: process.env.REACT_APP_BEARER
//     }
//   };
//   fetch('https://api.themoviedb.org/3/movie/movie_id/rating', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
  function changeRate(e){
        setRate(e.target.value);
  }
    return (
        <>
            <div className="form-review">
      <form onSubmit={myReviewSubmit}>
        <h1>Review for {movieTitle}</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/><br/>
        {/* <label htmlFor="Rating">Choose a Rating:</label> */}
        <label htmlFor="Rating">Rating:</label>
        <input type="range" id="rating" name="rating" onChange={changeRate} value={rate} min="0" max="10"></input>&nbsp;&nbsp;&nbsp;{rate}
        <p><label htmlFor="review">Your Review of {movieTitle}:</label></p>
        <textarea id="review" name="review" rows="4" cols="50"></textarea>
        <br />
        <button>Submit</button>
      </form>
      </div>

      
        </>
    )
}

export default PostReview
