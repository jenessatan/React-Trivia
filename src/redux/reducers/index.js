import {combineReducers} from 'redux';
// import trivia from './triviaReducer';
import initialState from './_initialState';

const trivia = (state = initialState, action) => {
  if (action.type === 'ADD_TRIVIA') {
    console.log([...state, action.trivia]);
    return [...state, action.trivia]
  };
  return state;
}

const rootReducer = combineReducers({
  trivia: trivia
});

export default rootReducer;