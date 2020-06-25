import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, SET_VISIBILITY_FILTER, OPEN_MODAL, CLOSE_MODAL, LOAD_ALL_ITEMS} from '../../constants/ActionTypes';
import API from '../api';

const loadTrivia = (triviaItems) => {
  return {
    type: LOAD_ALL_ITEMS,
    trivia: triviaItems
  }
}

const addTrivia = trivia => {
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

export const getAllTrivia = () => {
  return dispatch => {
    API.get('/trivia')
      .then(res => {
        dispatch(loadTrivia(res.data.trivia))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const createTriviaItem = (trivia) => {
  return dispatch => {
    API.post('/trivia', trivia)
    .then(res => {
      trivia._id = res.data.id;
      dispatch(addTrivia(trivia));
    }).catch(err => {
      console.log(err);
    }) 
  }
}