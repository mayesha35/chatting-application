import React from 'react'
import './style.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Signup from '../../svg/signup';
import Forms from './Forms';


const Registration = () => {
  return (
   <>
      <div className='registration'>
        <Container fixed>
          <Grid container justifyContent={"space-between"} alignItems={"center"}>
              <Grid className="bg" item xs={5.3}>
                  <Forms/>
              </Grid>
              <Grid className="bg" item xs={6.5}>
                 <Signup/>
              </Grid>
          </Grid>
        </Container>
      </div>
   </>
  )
}

export default Registration;