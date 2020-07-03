import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, SET_VISIBILITY_FILTER, OPEN_MODAL, CLOSE_MODAL, LOAD_ALL_ITEMS, START_LOADING, ITEM_ERROR, UPDATE_ITEM} from '../../constants/ActionTypes';
import API from '../api';

const setLoading = () => {
  return {
    type: START_LOADING
  }
}

const itemError = (error) => {
  return {
    type: ITEM_ERROR,
    error: error || 'Something went wrong'
  }
}

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

const updateTrivia = trivia => {
  return {
    type: UPDATE_ITEM,
    trivia
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
    dispatch(setLoading());
    API.get('/trivia/api/')
      .then(res => {
        dispatch(loadTrivia(res.data.trivia))
      })
      .catch(err => {
        console.log(err);
        // dispatch(itemError(err));
      })
  }
}

export const createTriviaItem = (trivia) => {
  return dispatch => {
    dispatch(setLoading());
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
    dispatch(setLoading());
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
    dispatch(setLoading());
    API.delete('/trivia/api/')
      .then(res => {
        console.log(res.data.trivia.deletedCount);
        dispatch(deleteAllTrivia());
      }).catch(err => {
        console.log(err);
      })
  }
}

export const updateTriviaItem = (trivia) => {
  return dispatch => {
    dispatch(setLoading());
    API.put(`/trivia/api/${trivia._id}`, trivia)
    .then(res => {
      dispatch(updateTrivia(trivia))
    }).catch(err => {
      console.log(err);
    })
  }
}

export const hideSnackbar = () => {
  return {
    type: 'HIDE_SNACKBAR'
  }
}