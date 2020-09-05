import {combineReducers} from 'redux';
import trivia from './trivia';
import VisibilityFilter from './visibility';
import modal from './modal'
import snackbar from './snackbar';


const rootReducer = combineReducers({
  trivia: trivia,
  visibility: VisibilityFilter,
  modal: modal,
  snackbar: snackbar
});

export default rootReducer;