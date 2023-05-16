import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmitInput = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <form className="todo_add" onSubmit={onSubmitInput}>
      <input
        className="todo_add_input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="New todo..."
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
export default TodoForm;
