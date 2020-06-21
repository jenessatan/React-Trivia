import React from 'react';
import QuestionItemContainer from '../containers/QuestionItemContainer';
import Filter from './Filter';
import '../styles/QuestionList.css';

const QuestionList = ({trivia, deleteAllTrivia}) => {
    return (
      <div className='question-list'>
        <h2>Question List</h2>
        <div className='list-options'>
          <Filter />
        <button className='delete-all-btn' onClick={deleteAllTrivia}>Delete All</button>
        </div>
          { trivia.length === 0 ? <p>There are no available questions</p> :
          trivia.map((val)=>
            <QuestionItemContainer key={val._id} item={val}/>)}
      </div>
    )
}

export default QuestionList