import React from "react"
import '../../styles/rate.css'
import redstar from '../../assets/star.svg'
import greystar from '../../assets/greystar.svg'

const Rate = ({data}) => {
    console.log(data.rating);
    const rating = data.rating
    const stars = [1, 2, 3, 4,5]
    
    return(
        <div className="star">
      {stars.map((star) =>
        rating >= star ? (
          <img key={star.toString()} className="rate" src={redstar} alt="red star"
          />
        ) : (
          <img
            key={star.toString()} className="rate" src={greystar} alt="grey star"/>
        )
      )}
    </div>
    )

}
export default Rate