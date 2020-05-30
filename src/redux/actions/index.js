export const addTrivia = trivia => {
  return {
    type: 'ADD_TRIVIA',
    trivia
  }
}

export const deleteAllTrivia = () => {
  return {
    type: 'DELETE_ALL_TRIVIA'
  }
}

export const setVisibility = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}