import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ViewOnlyRating = (props) => {
  let givenRating = props.rating - 1;
  const defaultColour = "#CFCFCF";
  const hoverColour = "#223047";
  return (
    <div>
      {[...Array(5)].map((star, idx) => {
        return (
          <FontAwesomeIcon 
          key={idx}
          className="rating-view" 
          icon={faStar} 
          color={idx <= givenRating? hoverColour : defaultColour} 
          size="lg"/>
        )
      })}
    </div>
  )
}

export default ViewOnlyRating;