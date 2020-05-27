import {combineReducers} from 'redux';
// import trivia from './triviaReducer';
import initialState from './_initialState';

const trivia = (state = initialState, action) => {
  if (action.type === 'ADD_TRIVIA') {
    state.trivia.push(action.trivia);
    console.log(state);
  };
  return state;
}

const rootReducer = combineReducers({
  trivia: trivia
});

export default rootReducer;