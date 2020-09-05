import initialState from './_initialState';
import {OPEN_MODAL, CLOSE_MODAL, UPDATE_ITEM} from '../../constants/ActionTypes';

const modal = (state = initialState.modal, action) => {
  if(action.type === OPEN_MODAL) {
    return {
      isOpen: true,
      data: action.trivia
    }
  }
  
  if (action.type === CLOSE_MODAL) {
    return {
      isOpen: false,
      data: {
        question:'',
        answer:'',
        category:''
      }
    }
  }

  if(action.type ===UPDATE_ITEM) {
    return {
      ...state,
      data: action.trivia
    }
  }
  return state;
}

export default modal;