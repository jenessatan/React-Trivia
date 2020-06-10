import React from "react";
import '../styles/InputForm.css';
import StarRatingInput from "./StarRatingInput";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
      category: "",
      difficulty: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let submitted = this.state;
    this.setState({     
      question: "",
      answer: "",
      category: "",
      difficulty: null});
    this.props.addTrivia(submitted);
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleReset = (e) => {
    e.target.reset();
    this.setState({     
      question: "",
      answer: "",
      category: "",
      difficulty: null})
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <div className="form-row">
            <div className="form-text">
              <label>Question</label>
                <input
                  type="search"
                  name="question"
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


          <div className="form-row">
            <div className="form-text">
              <label>Answer</label>
              <input
                type="search"
                name="answer"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-rating">
              <label>Difficulty</label>
              <StarRatingInput onChange={this.handleChange} currentRating={this.state.difficulty}/>
            </div>

          </div>

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