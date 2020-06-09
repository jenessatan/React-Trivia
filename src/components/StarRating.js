import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StarRating = (props) => {
  const defaultColour = "#CFCFCF";
  const hoverColour = "#223047";

  console.log(props);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        let ratingValue = i+1;

        return <label key={i}>
          <input type="radio" name="rating" value={ratingValue} onClick={props.onChange} onMouseEnter={} onMouseLeave={}/>
          <FontAwesomeIcon className="star" icon={faStar} color={ratingValue <= props.currentRating? hoverColour : defaultColour} size="2x"/>
          </label>
      })}
      {/* <FontAwesomeIcon icon={faStar} color={hoverColour} size="lg"/>
      <FontAwesomeIcon icon={faStar} color={defaultColour} size="lg"/> */}
    </div>
  )
}

export default StarRating;