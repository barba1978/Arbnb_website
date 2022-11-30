import React from 'react'
import { useRef,useState } from 'react'
import emailjs from '@emailjs/browser'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Contact from "./Contact.js"




const Book =()=>{

const [yes,setYes]=useState('none')
const [no,setNo]=useState('')

const form = useRef()

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s87rzht', 'template_4uxvaqs', form.current, 'h8paDkAt-HuSjZqow')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
setYes('')
setNo('none')
      e.target.reset()
  };

  const returnBack=()=>{
    setYes('none')
    setNo('')

  }

return(
    <div >
      
        <h1>Pagina Book & Info </h1>
        <hr/>
        <br/>
        
        

        <Box
      className='form--send--email'
      component="form"
      ref={form} 
      onSubmit={sendEmail}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <p className='email--send--form' style={{display:no} }>Contact us @BERGAMO38</p>
      <p className='email--send--message' style={{display:yes} }> <TaskAltIcon fontSize="large" /> Your Email has been sent! We will be back to you infew hours <Button onClick={returnBack}>Back to the Form</Button> </p>
      <TextField type='text' className='textfield--form--book'
        name='user_name' color="success" id="outlined-basic" label="Full Name" variant="outlined" required />
      <TextField type='email'
        name='user_email' id="outlined-basic" label="Email" variant="outlined" required/>
      <TextField  type='text'
        name='subject'  id="outlined-basic" label="Subject" variant="outlined" required />
        <TextField
        name='message'
        type='submit'
          id="filled-multiline-static outlined-basic"
          label="Multiline"
          multiline
          rows={8}
          defaultValue=""
          variant="outlined"
        />
        <Button type='submit' variant="contained" style={{display:no}} endIcon={<SendIcon />} >
  Send
</Button>
    </Box>
        
    <div>
  <Contact/>
</div>
    </div>
)
}



export default Book