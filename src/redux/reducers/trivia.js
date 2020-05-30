import initialState from './_initialState';

const trivia = (state = initialState.trivia, action) => {
    if (action.type === 'ADD_TRIVIA') {
      let id = {id: state.reduce((maxID, item) => Math.max(maxID, item.id), -1) + 1}
      return [...state, {...action.trivia, ...id}]  
      };
    return state;
}

export default trivia;