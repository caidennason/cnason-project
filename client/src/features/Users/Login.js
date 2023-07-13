import React from 'react';
import { Button, TextField, Box } from '@mui/material';

function Login(){

    const handleLogin = () => {
        console.log('clicked')
    }

    return(
        <div>
            <br></br>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Log In</h2>
            <br></br>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField required id="outlined-basic" label="Username" variant="outlined" />
                <TextField required id="filled-basic" label="Password" variant="outlined" />
            </Box>
            <Box variant='contained' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Button onClick={handleLogin} variant='contained' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Sign in</Button>
            </Box>
        </div>
    )
}

export default Login