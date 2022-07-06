import React, { useContext } from 'react';
import { TodoContext } from '../reducer';
import Todo from './Todo';


export default function TodoList() {
  const {state, } = useContext(TodoContext);

  const Todos = state.map((todo, index) => <Todo key={index} text={todo.text} completed={todo.completed} />)

  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        { Todos ? Todos : '' }
      </ul>
    </>
  );
}
