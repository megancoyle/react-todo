import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, item}) => {
    const [value, setValue] = useState(item.item);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, item.id);
      };
      
  return (
    <form onSubmit={handleSubmit} className="todo-form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update todo' />
    <button type="submit" className='todo-button'>Update</button>
  </form>
  )
}
