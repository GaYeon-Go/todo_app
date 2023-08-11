import React from 'react'
import TodoListItem from './TodoListItem'
import '../styles/TodoList.scss';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <div className='TodoList'>
      {todos.map( todo => (
        <TodoListItem
          key = {todo.id} //유니크한 키값이 무조건 필요하다.
          todo = {todo} //객체를 통으로 프랍스 형태로 전달
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default TodoList