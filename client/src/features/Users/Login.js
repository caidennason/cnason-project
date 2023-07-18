import React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function Login(){

    const navigate = useNavigate()

    const handleLogin = () => {
        console.log('clicked')
        navigate('/')
    }

    return(
        <div>
            <br></br>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Log In</h2>
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