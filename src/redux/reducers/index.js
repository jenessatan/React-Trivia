import {combineReducers} from 'redux';
import trivia from './trivia';
import VisibilityFilter from './visibility';
import modal from './modal'


const rootReducer = combineReducers({
  trivia: trivia,
  visibility: VisibilityFilter,
  modal: modal
});

export default rootReducer;