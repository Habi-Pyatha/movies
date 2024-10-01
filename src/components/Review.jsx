import React from 'react'

const Review = ({author,content,rating}) => {
  return (
   <>
   <div className="review-box">
    <span className='rev-author rev'><b>Author:</b>{author}<br />
    <b>Rating:</b>{rating}
    </span>
    <span className='rev-content rev'><b>Review:</b>{content}</span>
    </div>
   </>
  )
}

export default Review
