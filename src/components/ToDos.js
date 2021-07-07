import React from 'react';
import { ACTIONS } from './ToDo';

export default function Todos({ todo, dispatch }) {
    return(
        <div>
            <span style={{ color: todo.complete ? '	#00FF00' : '#000'}}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
                Complete
            </button>
            <button>
                Delete
            </button>
        </div>
    )
}