import React from "react";
import '../styles/InputForm.css';
import StarRating from "./StarRating";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
      category: "",
      rating: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.props.addTrivia(this.state);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
              <label>Question</label>
              <input
                type="search"
                name="question"
                onChange={this.handleChange}
                required
              />

          <div className="form-row-2">
            <div className="form-answer">
              <label>Answer</label>
              <input
                type="search"
                name="answer"
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-category">
              <label>Category</label>
              <select name="category" onChange={this.handleChange} required>
                <option value="">Select One</option>
                <option value="Disney">Disney</option>
                <option value="Food">Food</option>
              </select>
            </div>
          </div>

          <label>Difficulty</label>
          <StarRating onChange={this.handleChange} currentRating={this.state.rating}/>

          <div className="form-btn">
            <input type="submit" id="btn-save" className="btn" value="Submit" />
            <input type="reset" id="btn-clear" className="btn" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;