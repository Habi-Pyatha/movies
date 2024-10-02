import React, { Component } from 'react'
import Review from './Review'
 class ReviewForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  name:null,
        //  raing:null,
        //  review:null,
        reviews:[],
         submitted:false,

      }
    }
     myReviewSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const rating=Number(e.target.rating.value);
        const review=e.target.review.value;
        const newReview={name,rating,review};
        this.setState((prevState)=>({
          reviews:[...prevState.reviews,newReview],
          submitted:true,
        }));

        // this.setState({name,rating,review,submitted:true})
        // ,()=>{
        //     console.log(this.state);
        //     {
        //     <Review author={name} content={review} rating={rating}  />
        //     }
        // });
        e.target.reset();
      } ;
  render() {
    // const {name,rating,review,submitted}=this.state;
    const {reviews}=this.state;
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
      {/* {
       submitted &&(
         <Review author={name} content={review} rating={rating}  />
      )
      } */}
      {reviews.length > 0 &&(
        reviews.map((review,index)=>(
          <Review key={index} author={review.name} content={review.review} rating={review.rating}/>
        ))

      )}
      </div>
    )
  }
}

export default ReviewForm
