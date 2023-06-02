import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Textfields from './textfield';
const Forms = () => {
  return (
    <div>
        <h1>Get started with easily register</h1>
        <h3>Free register and you can enjoy it</h3>
        <Grid item xs={8.5}>
           <form action="">
              <Textfields/>
               <div className="reg-btn">
                  <Button variant="contained" fullWidth>Sign up</Button>
               </div>
               <p>Already  have an account ? <span>Sign In</span></p>
           </form>
        </Grid>
        
    </div>
  )
}

export default Forms