import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Forms = () => {
  return (
    <div>
        <h1>Get started with easily register</h1>
        <h3>Free register and you can enjoy it</h3>
        <form action="">
            <TextField className='text-field' type="email" id="outlined-basic" label="Email Address" variant="outlined" fullWidth/>
            <TextField className='text-field' type="text" id="outlined-basic" label="Full Name" variant="outlined" fullWidth/>
            <TextField className='text-field' type="password" id="outlined-basic" label="Password" variant="outlined" fullWidth/>
            <div className="reg-btn">
               <Button variant="contained" fullWidth>Sign up</Button>
            </div>
            <p>Already  have an account ? <span>Sign In</span></p>
        </form>
    </div>
  )
}

export default Forms