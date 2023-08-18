import React, { useState } from 'react';
import {auth, db} from '../firebase'
import { useAuth } from "../Context/AuthContext";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'



const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');
  const {uid, displayName} = auth.currentUser;

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return;
    }
    
    await addDoc(collection(db, 'messages'), {
        uid,
        name:displayName,
        text: input,
        timestamp: serverTimestamp()
    })
    setInput('');
    // scroll.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <form onSubmit={sendMessage} className='form-sub'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='form-input'
        type='text'
        placeholder='Message'
      />
      <button className='sub-btn' type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;