import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false, date: new Date() }]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  const editTask = (task, id) => {
    if (task.trim() === "") return;
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    ));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sort === "date") return new Date(b.date) - new Date(a.date);
    if (sort === "alphabetical") return a.task.localeCompare(b.task);
    return 0;
  });

  return (
    <div className="TodoWrapper">
      <h1>Plan Your Day!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter-sort">
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <select onChange={handleSortChange} value={sort}>
          <option value="date">Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
      {sortedTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
