import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login(){

    return(
        <div>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="filled-basic" label="Password" variant="outlined" />
        </div>
    )
}

export default Login