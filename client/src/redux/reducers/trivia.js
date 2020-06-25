import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, LOAD_ALL_ITEMS} from '../../constants/ActionTypes';

const trivia = (state = [], action) => {
  if (action.type === ADD_ITEM) {
    return [...state, { ...action.trivia}];
  } 
  
  if (action.type === DELETE_ITEM) {
    return state.filter((item) => item._id !== action._id);
  } 
  
  if (action.type === DELETE_ALL_ITEMS) {
    return [];
  }
  
  if (action.type === LOAD_ALL_ITEMS) {
    return action.trivia
  }

  return state;
};

export default trivia;
