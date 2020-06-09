import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, SET_VISIBILITY_FILTER, OPEN_MODAL, CLOSE_MODAL} from '../../constants/ActionTypes';

export const addTrivia = trivia => {
  return {
    type: ADD_ITEM,
    trivia
  }
}

export const deleteTrivia = trivia => {
  return {
    type: DELETE_ITEM,
    _id: trivia._id
  }
}

export const deleteAllTrivia = () => {
  return {
    type: DELETE_ALL_ITEMS
  }
}

export const setVisibility = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const openModal = trivia => {
  return {
    type: OPEN_MODAL,
    trivia
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}