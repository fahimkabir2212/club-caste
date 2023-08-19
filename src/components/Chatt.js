import React, { useState, useEffect, useRef } from 'react';

import SendMessage from './SendMessage';
import Texts from './Texts';


const Chatt = () => {
  return (
    <>
    <div className="chat-panel">
    <Texts/>   
    <SendMessage/>
      {/* <span ref={scroll} ></span> */}
    </div>
    </>
  )
}

export default Chatt
