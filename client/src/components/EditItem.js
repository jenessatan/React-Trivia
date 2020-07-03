import React from "react";
// import "../styles/Details.css";
import StarRatingInput from "./StarRatingInput";
import { connect } from "react-redux";
import { updateTriviaItem } from "../redux/actions";

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props.details};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let submitted = this.state;
    this.props.updateTriviaItem(submitted);
    this.props.closeEditing();
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleReset = (e) => {
    this.props.closeEditing()
  }

  render() {
    return (
      <div className="details-modal">
        <header className="modal-header">
          <h3>Edit Details</h3>
          <button className="close-modal-btn" onClick={this.props.closeModal}>
            &times;
          </button>
        </header>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <div className="form-row">
            <div className="form-text">
              <label>Question</label>
                <input
                  type="search"
                  name="question"
                  onChange={this.handleChange}
                  value={this.state.question}
                  required
                />
            </div>
            <div className="form-category">
              <label>Category</label>
              <select name="category" onChange={this.handleChange} required value={this.state.category}>
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
                value={this.state.answer}
              />
            </div>
            <div className="form-rating">
              <label>Difficulty</label>
              <StarRatingInput onChange={this.handleChange} currentRating={this.state.difficulty}/>
            </div>

          </div>

          <div className="form-btn">
            <input type="submit" id="btn-save" className="btn" value="Save" />
            <input type="reset" id="btn-clear" className="btn" value="Cancel" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateTriviaItem })(EditItem);