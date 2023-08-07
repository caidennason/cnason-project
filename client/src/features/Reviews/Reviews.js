import React from 'react';
import { useSelector } from 'react-redux';

function Reviews({establishments}){

    console.log(establishments)

    const establishmentReviews = establishments.reviews.map((reviews) => {
        return reviews.content
    })

    const reviews = () => {
        return(
            <>
            <h3>Reviews:</h3>
            <p>{establishmentReviews}</p>  
            </>
        )
    }
    return (
        <div>
            {establishmentReviews.length >=1  ? reviews() : 'No reviews ... yet'}
        </div>
    )
}

export default Reviews

{/* <div>
      <h2>{establishment.name}</h2>
      <h3>Reviews:</h3>
      {establishment.reviews.map((review) => (
        <div key={review.id}>
          <p>{review.content}</p>
          {/* Display other review properties here */}
    //     </div>
    //   ))}
    // </div> */}