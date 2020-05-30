import React from "react";
import "../styles/Details.css";

class Details extends React.Component {
  deleteItem = () => {
    this.props.onClick();
    this.props.delete(this.props.item);
  };

  render() {
    let { question, answer, category } = this.props.item;
    return (
      <div className="modal">
        <div className="details-modal">
          <header className="modal-header">
            <h3>Details</h3>
            <button className="close-modal-btn" onClick={this.props.onClick}>
              &times;
            </button>
          </header>
          <div className="modal-content">
            <p>{question}</p>
            <p className="modal-content-label">Question</p>
            <p>{answer}</p>
            <p className="modal-content-label">Answer</p>
            <p>{category}</p>
            <p className="modal-content-label">Category</p>
          </div>
          <button className="delete-item-btn" onClick={this.deleteItem}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Details;
