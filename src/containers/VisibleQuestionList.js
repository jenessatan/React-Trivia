import {connect} from 'react-redux';
import QuestionList from '../components/QuestionList';
import {VisibilityFilters} from '../constants/Filters';
import {deleteAllTrivia} from '../redux/actions'

const getVisibleTodos = (items, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return items
      case VisibilityFilters.SHOW_DISNEY:
        return items.filter(val => val.category === 'Disney')
      case VisibilityFilters.SHOW_FOOD:
        return items.filter(val => val.category === 'Food')
      default:
        return items
    }
  }
  
  const mapStateToProps = state => ({
    trivia: getVisibleTodos(state.trivia, state.visibility)
  })

  
  export default connect(
    mapStateToProps, {deleteAllTrivia}
  )(QuestionList)