import {combineReducers} from 'redux';
import trivia from './triviaReducer';

const rootReducer = combineReducers({
  trivia: trivia
});

export default rootReducer;