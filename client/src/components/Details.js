import React from "react";
import "../styles/Details.css";
import ViewOnlyRating from './ViewOnlyRating';

const Details = ({modal, closeModal, deleteTriviaItem}) => {
    let { question, answer, category, difficulty } = modal.data;
    return (
      <div className="modal">
        <div className="details-modal">
          <header className="modal-header">
            <h3>Details</h3>
            <button className="close-modal-btn" onClick={closeModal}>
              &times;
            </button>
          </header>
          <div className="modal-content">
            <p>{question}</p>
            <p className="modal-content-label">Question</p>
            <p>{answer}</p>
            <p className="modal-content-label">Answer</p>
            <div className="modal-rating-category">
              <div className="modal-category">  
                <p>{category}</p>
                <p className="modal-content-label">Category</p>
              </div>
              <div className="modal-rating">
                <ViewOnlyRating rating={difficulty} />
                <p className="modal-content-label">Difficulty</p>
              </div>
            </div>
          </div>
          <button className="delete-item-btn" onClick={() => {  
            if (window.confirm('Are you sure you want to delete this item?'))  {
              closeModal();
              deleteTriviaItem(modal.data);}}}>
            Delete
          </button>
        </div>
      </div>
    );
}

export default Details;
