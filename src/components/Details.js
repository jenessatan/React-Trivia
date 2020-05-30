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
        <p>{question}</p>
        <p>{answer}</p>
        <p>{category}</p>
      </div>
        </div>
    );
  }
}

export default Details;
