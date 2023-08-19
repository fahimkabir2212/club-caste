import React from 'react'

export const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? 'single-task-inc': 'single-task'}>
        <div className='task-row'>
            <div className='task-name'>
                <input onChange={()=> toggleComplete(todo)} type="checkbox" checked={todo.completed? 'checked':''} />
                <h4 onClick={()=> toggleComplete(todo)} className=''>{todo.text}</h4>
            </div>
            <p onClick={()=> toggleComplete(todo)} className= {todo.completed?'completedtext task-desc':'incompletedtext task-desc'}>{todo.description}</p>
            <div className='task-deadline'>
                <p onClick={()=> toggleComplete(todo)} className='deadline-date'>🗓️ {todo.deadline}</p>
                <div className='edit-delete'>
                    <button className='task-edit'>Edit</button>
                    <button className='task-delete' onClick={() => deleteTodo(todo.id)}>delete</button>
                </div>
            </div>
            
        </div>
    </li>
  )
}
