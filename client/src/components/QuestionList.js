import React from 'react';
import QuestionItemContainer from '../containers/QuestionItemContainer';
import Filter from './Filter';
import '../styles/QuestionList.css';
import { connect } from "react-redux";
import { VisibilityFilters } from "../constants/Filters";
import { getAllTrivia  } from "../redux/actions";
// import { deleteAllTrivia } from "../redux/actions";

class QuestionList extends React.Component {
  componentDidMount() {
    this.props.getAllTrivia();
  }

  render() {
    let {trivia} = this.props;
        return (
          <div className='question-list'>
            <h2>Question List</h2>
            <div className='list-options'>
              <Filter />
            {/* <button className='delete-all-btn' onClick={deleteAllTrivia}>Delete All</button> */}
            </div>
              { trivia.length === 0 ? <p>There are no available questions</p> :
              trivia.map((val)=>
                <QuestionItemContainer key={val._id} item={val}/>)}
          </div>
        )

  }
}

const getVisibleTrivia = (items, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items;
    case VisibilityFilters.SHOW_DISNEY:
      return items.filter((val) => val.category === "Disney");
    case VisibilityFilters.SHOW_FOOD:
      return items.filter((val) => val.category === "Food");
    default:
      return items;
  }
};

const mapStateToProps = (state) => ({
  trivia: getVisibleTrivia(state.trivia, state.visibility),
});


export default connect(mapStateToProps, {getAllTrivia})(QuestionList);