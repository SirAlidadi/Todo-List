import React, { useState, useContext } from 'react';
import { AddTodoAction, TodoContext } from '../reducer';

export default function AddTodo() {
  const { state, dispatch } = useContext(TodoContext);

  const [text, setText] = useState('');

  function ChangeHandler(e) {
    setText(e.target.value);
  }

  function SubmitHandler(e) {
    e.preventDefault();
    dispatch(AddTodoAction(text))
  }

  return (
    <p>
      <label htmlFor="new-task">Add Item</label>
      <input id="new-task" type="text" onChange={ ChangeHandler } />
      <button onClick={ SubmitHandler }>Add</button>
    </p>
  );
}
