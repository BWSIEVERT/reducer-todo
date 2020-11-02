import React, { useReducer } from 'react';
import reducer from './../reducers/index';
import { addToDo, setAddToDo } from './../actions';


const ToDoList = () => {
  const initialState = {
    item: [' Test '],
    completed: false,
    id: Math.round(Math.random() * 435636),
    newToDo: ''
  }

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleChange = e => {
      dispatch(setAddToDo(e.target.value));
  }
  const handleSubmit = e => {
      e.preventDefault();
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
      className='add-todo'
      type='text'
      name='newToDo'
      value={state.newToDo}
      onChange={handleChange}
      />
      <button
      onClick={() => {
          dispatch(addToDo(state.newToDo))
      }}>Add</button>
    </form>
    <h4>
        {state.item}
    </h4>
    <p>
        id: {state.id}
    </p>
  </div>
  )
}

export default ToDoList;