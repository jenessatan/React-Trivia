import initialState from "./_initialState";
import {SET_VISIBILITY_FILTER} from '../../constants/ActionTypes';

const VisibilityFilter = (state = initialState.visibility, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

export default VisibilityFilter;