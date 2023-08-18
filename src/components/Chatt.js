import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';


const Chatt = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
  
    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    }, []);

  return (
    <>
    <main className='main-sec'>
        {/* Chat messeage Comp */}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
     
    </main>

        {/* Send Message comp */}
        <SendMessage/>

    <span ref={scroll} ></span>
    
    </>
  )
}

export default Chatt
