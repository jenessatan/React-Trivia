import React from 'react';
import QuestionItem from './QuestionItem';
import Filter from './Filter';

class QuestionList extends React.Component {
  render() {
    return (
      <div className='question-list'>
        <h2>Question List</h2>
        <div className='list-options'>
          <Filter />
        <button className='delete-all-btn'>Delete All</button>
        </div>
          {this.props.trivia.map((val,idx )=>
            <QuestionItem key={idx} item={val} />)}
      </div>
    )
  }
}

export default QuestionList