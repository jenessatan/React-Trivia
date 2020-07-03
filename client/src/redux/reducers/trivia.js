import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, LOAD_ALL_ITEMS, START_LOADING, ITEM_ERROR, UPDATE_ITEM} from '../../constants/ActionTypes';

const initialState = {
  loading: false,
  data: [],
  error: null
}

const trivia = (state = initialState, action) => {
  if(action.type === START_LOADING) {
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === ITEM_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  if (action.type === ADD_ITEM) {
    return {...state, loading: false, data: [...state.data, { ...action.trivia}]};
  } 
  
  if (action.type === DELETE_ITEM) {
    return {
      ...state,
      loading: false,
      data: state.data.filter((item) => item._id !== action._id)
    };
  } 
  
  if (action.type === DELETE_ALL_ITEMS) {
    return {
      ...state,
      loading: false,
      data: []
    };
  }
  
  if (action.type === LOAD_ALL_ITEMS) {
    return {
      ...state,
      loading: false,
      data: action.trivia
    }
  }

  if(action.type === UPDATE_ITEM) {
    let newDataState = state.data.map((item) => item._id === action.trivia._id? action.trivia : item);
    return {
      ...state,
      loading: false,
      data: newDataState
    }
  }

  return state;
};

export default trivia;
