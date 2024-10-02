import React, { Component } from 'react'
import Review from './Review'
 class ReviewForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:null,
         raing:null,
         review:null,
         submitted:false,

      }
    }
     myReviewSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const rating=e.target.rating.value;
        const review=e.target.review.value;
        this.setState({name,rating,review,submitted:true})
        // ,()=>{
        //     console.log(this.state);
        //     {
        //     <Review author={name} content={review} rating={rating}  />
        //     }
        // });
      }  
  render() {
    const {name,rating,review,submitted}=this.state;
    const {movieTitle}=this.props;
    return (
      <div>
        <div className="form-review">
      <form onSubmit={this.myReviewSubmit}>
        <h1>Review for {movieTitle}</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/><br/>
        {/* <label htmlFor="Rating">Choose a Rating:</label> */}
        <label htmlFor="Rating">Rating:</label>
        <input type="range" id="rating" name="rating" min="0" max="10"></input>
        <p><label htmlFor="review">Your Review of {movieTitle}:</label></p>
        <textarea id="review" name="review" rows="4" cols="50"></textarea>
        <br />
        <button>Submit</button>
      </form>
      </div>
      {
       submitted &&(
         <Review author={name} content={review} rating={rating}  />
      )
      }
      </div>
    )
  }
}

export default ReviewForm
