import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const todos=useSelector(state=>state.todoReducer.todos)
  return (
    
    <div>
        {todos.map(todo=><Task key={todo.id} todo={todo} />)}
    </div>
  )
}

export default ListTask;