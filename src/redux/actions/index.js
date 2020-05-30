import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, SET_VISIBILITY_FILTER} from '../../constants/ActionTypes';

export const addTrivia = trivia => {
  return {
    type: ADD_ITEM,
    trivia
  }
}

export const deleteTrivia = trivia => {
  return {
    type: DELETE_ITEM,
    id: trivia.id
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