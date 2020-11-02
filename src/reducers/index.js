import { ADD_TODO, SET_ADD_TO_DO } from './../actions';

const reducer = (state, action) => {
    switch(action.type) {
        case (ADD_TODO) :
            return ({
                ...state, item: action.payload
            })
        case (SET_ADD_TO_DO) :
            return ({
                ...state, newToDo: action.payload
            })
        default:
            return(state);
    }
}

export default reducer;