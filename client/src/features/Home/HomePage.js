import React from 'react';
import { Box, Typography } from '@mui/material';

function HomePage(){

    return(
        <Box 
        style={{
            display: 'flex',  
            flexDirection: 'column',
            justifyContent:'center', 
            alignItems:'center',
            textAlign: 'center'
        }}
        >
            <Typography variant="h3">
                Welcome to Dog Friendly! 
            </Typography>
            <Typography>
                Dog Friendly is a way to keep track of which establishments allow dogs, and which ones don't.
            </Typography>
            <Typography>
                Make sure to sign in, and start keeping track of where you can bring your sweet dogs.
            </Typography>
            <Typography>
                inspired by winoa and frankie
            </Typography>
        </Box>
    )
}

export default HomePage;