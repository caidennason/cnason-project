import React from 'react';
import { TextField, Box } from '@mui/material';

function Signup(){

    return(
        <div>
            <br></br>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >Sign up for Dog Friendly!</h2>
            <br></br>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
        <TextField required id="outlined-basic" label="Username" variant="outlined" />
        <TextField required id="filled-basic" label="Password" variant="outlined" />
        <TextField required id="filled-basic" label="Confirm Password" variant="outlined" />
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField required id="outlined-basic" label="Location" variant="outlined"/>
            <TextField required id="outlined-basic" label="Bio" variant="outlined"/>
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField id="outlined-basic" label="Photo URL" variant="outlined"/>
        </Box>
        </div>
    );
};

export default Signup;