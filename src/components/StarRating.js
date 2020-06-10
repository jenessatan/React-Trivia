import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class StarRating extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hover: null
    }
  }

  handleHover(item) {
    this.setState({hover: item})
  }

  render() {
    let {onChange, currentRating} = this.props;

    const defaultColour = "#CFCFCF";
    const hoverColour = "#223047";

    return (
      <div className="rating">
        {[...Array(5)].map((star, i) => {
          let ratingValue = i+1;

          return <label key={i}>
            <input type="radio" name="rating" value={ratingValue} onClick={onChange}/>
            <FontAwesomeIcon 
              className="star" 
              icon={faStar} 
              color={ratingValue <= (this.state.hover || currentRating)? hoverColour : defaultColour} 
              size="2x"
              onMouseEnter={() => this.handleHover(ratingValue)}
              onMouseLeave={() => this.handleHover(null)}/>
            </label>
        })}
      </div>
    )
  }
}

export default StarRating;