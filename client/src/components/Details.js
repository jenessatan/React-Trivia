import React, {useState} from "react";
import "../styles/Details.css";
import ViewOnlyRating from './ViewOnlyRating';
import EditItem from './EditItem';

const Details = ({modal, closeModal, deleteTriviaItem}) => {
    let { question, answer, category, difficulty } = modal.data;
    const [isEditing, setEditing] = useState(false);

    if(modal.isOpen && !isEditing) {
      return (<div className="modal">
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
        <div className="btn-container">
          <button className="delete-item-btn" onClick={() => {  
            if (window.confirm('Are you sure you want to delete this item?'))  {
              closeModal();
              deleteTriviaItem(modal.data);}}}>
            Delete
          </button>
          <button className="edit-item-btn" onClick={() => setEditing(true)}>Edit</button>
        </div>
      </div>
    </div>)
    } else if (modal.isOpen && isEditing) {
      return (
        <div className="modal"><EditItem details={modal.data} closeModal={closeModal} closeEditing={() => setEditing(false)}/></div>
      )
    }else {
      return null
    }
}

export default Details;
