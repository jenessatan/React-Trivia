import React from 'react';
import QuestionItem from './QuestionItem';
import Filter from './Filter';
import '../styles/QuestionList.css';

class QuestionList extends React.Component {
  render() {
    return (
      <div className='question-list'>
        <h2>Question List</h2>
        <div className='list-options'>
          <Filter />
        <button className='delete-all-btn' onClick={this.props.deleteAllTrivia}>Delete All</button>
        </div>
          { this.props.trivia.length === 0 ? <p>There are no available questions</p> :
          this.props.trivia.map((val)=>
            <QuestionItem key={val.id} item={val} delete={this.props.deleteTrivia}/>)}
      </div>
    )
  }
}

export default QuestionList