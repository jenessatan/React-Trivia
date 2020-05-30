import React from "react";

class Details extends React.Component {
  render() {
    let { question, answer, category } = this.props.trivia;
    return (
        <div className='modal'>

      <div className="details-modal">
        <header className='modal-header'>
          <h2>Details</h2>
          <button className="close-modal-btn" onClick={this.props.onClick}>
            &times;
          </button>
        </header>
        <div className='modal-content'>
            <p>{question}</p>
            <p className='modal-content-label'>Question</p>
            <p>{answer}</p>
            <p className='modal-content-label'>Answer</p>
            <p>{category}</p>
            <p className='modal-content-label'>Category</p>
        </div>
        <button className="delete-item-btn">Delete</button>
      </div>
        </div>
    );
  }
}

export default Details;
