import {combineReducers} from 'redux';
import trivia from './trivia';
import VisibilityFilter from './visibility';


const rootReducer = combineReducers({
  trivia: trivia,
  visibility: VisibilityFilter
});

export default rootReducer;