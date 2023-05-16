import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const addNewTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      isCompleted: false,
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const comletedTodo = (todo) => {
    setTodos(
      todos.map((t) =>
        t.id !== todo.id ? { ...t } : { ...t, isCompleted: !t.isCompleted }
      )
    );
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addNewTodo} />
      <TodoList toggleTodo={comletedTodo} remove={removeTodo} todos={todos} />
    </div>
  );
}

export default App;
