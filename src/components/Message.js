import React from 'react'
import { auth } from '../firebase';

const Message = ({message}) => {

  const messageClass = 
    message.uid === auth.currentUser.uid ?
    `sent` : `recieved`;
  

  return (
    <>
        <div className={` message ${messageClass}`}>
            {/* <p className='name'>Fahim</p> */}
            <p>{message.text}</p>
        </div>
    </>
  )
}

export default Message