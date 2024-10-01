import React from 'react'

const Review = ({author,content}) => {
  return (
   <>
    <span>Author:{author}</span>
    <span>Review:{content}</span>
   </>
  )
}

export default Review
