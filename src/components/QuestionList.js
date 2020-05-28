import React from 'react';
import QuestionItem from './QuestionItem';
import {connect} from 'react-redux';

class QuestionList extends React.Component {
  render() {
    return (
      <div>
        <h2>Question list</h2>
          {this.props.trivia.map((val,idx )=>
            <QuestionItem key={idx} item={val} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {trivia: state.trivia}
}

export default connect(mapStateToProps)(QuestionList);