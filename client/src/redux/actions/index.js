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

const deleteTrivia = trivia => {
  return {
    type: DELETE_ITEM,
    _id: trivia._id
  }
}

const deleteAllTrivia = () => {
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
    API.get('/trivia/api/')
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
    API.post('/trivia/api/', trivia)
    .then(res => {
      trivia._id = res.data.id;
      dispatch(addTrivia(trivia));
    }).catch(err => {
      console.log(err);
    }) 
  }
}

export const deleteTriviaItem = (trivia) => {
  return dispatch => {
    API.delete(`/trivia/api/${trivia._id}`)
    .then(res => {
      dispatch(deleteTrivia(trivia));
    }).catch(err => {
      console.log(err);
    })
  }
}

export const deleteAllTriviaItems = () => {
  return dispatch => {
    API.delete('/trivia/api/')
      .then(res => {
        console.log(res.data.trivia.deletedCount);
        dispatch(deleteAllTrivia());
      }).catch(err => {
        console.log(err);
      })
  }
}