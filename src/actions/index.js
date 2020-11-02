
export const ADD_TODO = 'ADD_TODO';
export const SET_ADD_TO_DO = 'SET_ADD_TO_DO';

export const addToDo = (add) => {
    return ({
        type: ADD_TODO,
        payload: add
    })
}

export const setAddToDo = (add) => {
    return({
        type: SET_ADD_TO_DO,
        payload: add
    })
}