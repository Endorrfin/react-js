import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ( { todos, onDeleted,
                      onToggleImportant,
                      onToggleDone }) => {

  const elements = todos.map((item) => {

    // применяем 2 параметра: id = 1-й параметр, ...itemProps - 2-й параметр
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
      {/* Можно передвать все свойства объекта в компонент используя Object Spread оператор (не перечисляя каждое) */}
        <TodoListItem 
          { ...itemProps }
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};


export default TodoList;