import { useReducer } from 'react';
// const initialState = [{
//     item: '',
//     completed: false,
//     id: Math.round(Math.random() * 1345)
// }]

const initialState = { count: 0 }

function reducer(state, action) {
    switch(action.type) {
        case 'INCREASE' :
            return { count: state.count + 1 }
        case 'DECREASE' :
            return { count: state.count - 1 }
        case 'CLEAR' :
            return { count: 0 }
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
        <div className='count'>
            Count: {state.count}
        </div>
        <button onClick={() => dispatch({ type: 'INCREASE'})}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREASE'})}>-1</button>
        <button onClick={() => dispatch({ type: 'CLEAR'})}>clear</button>
        </>
    )
}

export default Counter;