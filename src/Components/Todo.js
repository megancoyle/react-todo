import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({item, deleteTodo, editTodo, toggleComplete}) => { 
  return (
    <div className="todo">
        <p className={`${item.completed ? 'completed' : ""}`} onClick={() => toggleComplete(item.id)}>{item.item}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(item.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(item.id)} />
        </div>
    </div>
  )
}
