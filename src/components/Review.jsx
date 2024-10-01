import React from 'react'

const Review = ({author,content}) => {
  return (
   <>
   <div className="review-box">
    <span className='rev-author rev'>Author:{author}</span>
    <span className='rev-content rev'>Review:{content}</span>
    </div>
   </>
  )
}

export default Review
