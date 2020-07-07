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
    API.get('/api/trivia')
      .then(res => {
        dispatch(loadTrivia(res.data))
      })
      .catch(err => {
        // console.log(err)
        dispatch(itemError());
      })
  }
}

export const createTriviaItem = (trivia) => {
  return dispatch => {
    dispatch(setLoading());
    API.post('/api/trivia', trivia)
    .then(res => {
        dispatch(addTrivia(res.data));
    }).catch(err => {
      // console.log(err.message);
      dispatch(itemError("Unable to add duplicate questions"));
    }) 
  }
}

export const deleteTriviaItem = (trivia) => {
  return dispatch => {
    dispatch(setLoading());
    API.delete(`/api/trivia/${trivia._id}`)
    .then(res => {
      dispatch(deleteTrivia(res));
    }).catch(err => {
      // console.log(err);
      dispatch(itemError());
    })
  }
}

export const deleteAllTriviaItems = () => {
  return dispatch => {
    dispatch(setLoading());
    API.delete('/api/trivia')
      .then(res => {
        console.log(res.data.trivia.deletedCount);
        dispatch(deleteAllTrivia());
      }).catch(err => {
        // console.log(err);
        dispatch(itemError());
      })
  }
}

export const updateTriviaItem = (trivia) => {
  return dispatch => {
    dispatch(setLoading());
    API.put(`/api/trivia/${trivia._id}`, trivia)
    .then(res => {
      dispatch(updateTrivia(res.data))
    }).catch(err => {
      // console.log(err);
      dispatch(itemError("Unable to update this item"));
    })
  }
}

export const hideSnackbar = () => {
  return {
    type: 'HIDE_SNACKBAR'
  }
}