import initialState from "./_initialState";
import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS} from '../../constants/ActionTypes';

const trivia = (state = initialState.trivia, action) => {
  if (action.type === ADD_ITEM) {
    let id = {
      id: state.reduce((maxID, item) => Math.max(maxID, item.id), -1) + 1,
    };
    return [...state, { ...action.trivia, ...id }];
  } 
  
  if (action.type === DELETE_ITEM) {
    console.log(action.id);
    return state.filter((item) => item.id !== action.id);
  } 
  
  if (action.type === DELETE_ALL_ITEMS) {
    return [];
  }
  
  return state;
};

export default trivia;
