export const addTrivia = trivia => {
  return {
    type: 'ADD_TRIVIA',
    trivia
  }
}

export const setVisibility = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}