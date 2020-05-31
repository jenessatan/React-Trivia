import React from "react";
import "../styles/Details.css";

const Details = ({modal, closeModal, deleteTrivia}) => {
    let { question, answer, category } = modal.data;
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
            <p>{category}</p>
            <p className="modal-content-label">Category</p>
          </div>
          <button className="delete-item-btn" onClick={() => {    
            closeModal();
            deleteTrivia(modal.data);}}>
            Delete
          </button>
        </div>
      </div>
    );
}

export default Details;
