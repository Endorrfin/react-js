import React from 'react';

import TodoListItem from './todo-list-item';


const TodoList = ( { todos }) => {

  const elements = todos.map((item) => {

    // применяем 2 параметра: id = 1-й параметр, ...itemProps - 2-й параметр
    const { id, ...itemProps } = item;
    return (
      <li key={item.id}>
      {/* Можно передвать все свойства объекта в компонент используя Object Spread оператор (не перечисляя каждое) */}
        <TodoListItem { ...itemProps } />
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  )
}


export default TodoList;