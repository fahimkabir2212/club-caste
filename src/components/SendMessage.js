import React, { useState } from 'react';
import {auth, db} from '../firebase'
import { useAuth } from "../Context/AuthContext";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import sendIcon from '../icons/send.svg'


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
    <div className='send-form'>
      <form onSubmit={sendMessage} className='form-sub'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='form-input'
        type='text'
        placeholder='Message'
      />
      <button className='sub-btn' type='submit'>
        <img className='submitIcon' src={sendIcon} alt="React Logo" type='submit' />
      </button>
    </form>
    </div>
  );
};

export default SendMessage;