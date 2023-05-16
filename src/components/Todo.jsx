import React from 'react';
import cl from './Todo.module.css';
import { RiCheckFill, RiDeleteBin2Line } from 'react-icons/ri';

const Todo = ({ remove, todo, toggleTodo }) => {
  console.log(todo);
  return (
    <div
      className={`${cl.todo_conteiner} ${
        todo.isCompleted ? cl.todo_completed : ''
      }`}
      //   className={cl.todo_conteiner}
      onDoubleClick={() => remove(todo)}
    >
      <p>{todo.text}</p>
      <div className={cl.todo_icon}>
        <RiCheckFill
          className={cl.todo_icon_check}
          onClick={() => toggleTodo(todo)}
        />
        <RiDeleteBin2Line
          className={cl.todo_icon_delete}
          onClick={() => remove(todo)}
        />
      </div>
    </div>
  );
};
export default Todo;
