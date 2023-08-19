import React,  {useEffect, useState}  from 'react'
import {Todo} from './Todo' ;
import {db} from '../firebase';
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';

const TaskPanel = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputDeadline, setInputDeadline] = useState('');
 
   
   //Create 
   const createTodo = async (e) => {
     e.preventDefault(e);
     if (input === '' && inputDesc === '' && inputDeadline === '') {
       alert('Please enter a valid todo');
       return;
     }
     await addDoc(collection(db, 'todos'), {
       text: input,
       completed: false,
       description: inputDesc,
       deadline: inputDeadline
     });
     setInput('');
     setInputDesc('');
     setInputDeadline('');
   };
   
   //Read
     useEffect(()=>{
       const q = query(collection(db,'todos'));
       const unsubscribe = onSnapshot(q, (querySnapshot) =>{
         let todosArr = [];
         querySnapshot.forEach((doc) => {
           todosArr.push({ ...doc.data(), id: doc.id });
         });
         setTodos(todosArr);
       })
       return () => unsubscribe();
     },[])
     
   //Update
   const toggleComplete = async (todo) => {
     await updateDoc(doc(db, 'todos', todo.id), {
       completed: !todo.completed,
     });
   };
   //Delete
   const deleteTodo = async (id) => {
     await deleteDoc(doc(db, 'todos', id));
   };
  return (
    <>
        <div className='task-panel' >
            <div className='task-heading'>
              <h3>Assigned tasks</h3>
              <button className='create-task-btn'> Create new task </button>
            </div>
            <form onSubmit={createTodo} className='task-form'>
              <input onChange={(e) => setInput(e.target.value)}  value={input} className ='form-input task-name-inp' type="text" placeholder='Task name'/>
              <input onChange={(e) => setInputDeadline(e.target.value)} value={inputDeadline}  className ='form-input task-deadline-inp' type="text" placeholder='Deadline'/>
              <input onChange={(e) => setInputDesc(e.target.value)} value={inputDesc}  className ='form-input task-description-inp' type="text" placeholder='Description'/>
              <button className='create-task-btn' onSubmit={createTodo}>  </button>
            </form>
            <ul className='todo-list'>
            {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete = {toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))};
              
            </ul>
        </div>
    </>
  )
}

export default TaskPanel