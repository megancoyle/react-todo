import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
      
  return (
    <form onSubmit={handleSubmit} className="todo-form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What should you do today?' />
    <button type="submit" className='todo-button'>Add</button>
  </form>
  )
}
