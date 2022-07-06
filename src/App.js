import React, { useReducer } from 'react';

import { initialState, reducer, TodoContextProvider } from './reducer'; 

import Container from './components/Container';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Completed from './components/Completed';

import './main.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContextProvider value={{ state, dispatch }}>
      <Container>
        <AddTodo />
        <TodoList />
        <Completed />
      </Container>
    </TodoContextProvider>
  );
}

export default App;
