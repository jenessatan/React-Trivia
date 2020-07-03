import initialState from './_initialState';
import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEM_ERROR} from '../../constants/ActionTypes';



const snackbar = (state = initialState.snackbar, action) => {
  if(action.type === 'HIDE_SNACKBAR') {
    return {
      isOpen: false,
      data: ""
    }
  } 

  if(action.type === ADD_ITEM) {
    return {
      isOpen: true,
      data: "Successfully added new item"
    }
  }

  if(action.type === DELETE_ITEM) {
    return {
      isOpen: true,
      data: "Successfully deleted item"
    }
  }

  if(action.type === UPDATE_ITEM) {
    return {
      isOpen: true,
      data: "Successfully updated item"
    }
  }

  if(action.type === ITEM_ERROR) {
    return {
      isOpen: true,
      data: action.error
    }
  }

  return state
}

export default snackbar;