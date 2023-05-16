import React from 'react';
import Todo from './Todo';

const TodoList = ({ remove, todos, toggleTodo }) => {
  if (!todos.length) {
    return <h1>No tasks for today</h1>;
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo toggleTodo={toggleTodo} remove={remove} key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
