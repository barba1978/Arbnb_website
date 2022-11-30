import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Chatbox = () => {
   
    const [message, setMessage] = useState('');
    const [yes, setYes] = useState('none');
    const [no,setNo] = useState('');

    const buttonClick=()=>{
        setYes("")
        setNo("none")
    }
    const closeChat=()=>{
        setYes("none")
        setNo("")
    }
    
  
    return (
   
   
       
       
<div className='chat--box'>
<button style={{display:no}} className='open-button' onClick={buttonClick}>What's up!</button>
 <div style={{display:yes}} className="chat-popup" id="myForm">
  
<form  className="form-container">

    <label for="msg"><b>Message</b></label>

    <textarea
            id="message"
            name="msg"
            placeholder="..."
            value={message}
            required
            onChange={e => setMessage(e.target.value)}
          />

           <ReactWhatsapp className="btn" number="+9720543422305" message={message}>
            Send 
          </ReactWhatsapp>
          
   
   
  </form>
  <CloseIcon onClick={closeChat}/>
</div>
</div>
         
         
  
      
    );
  };
  
export default Chatbox