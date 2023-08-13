import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

function UserReviews({r}){

    console.log(r)

    return(
        <>
        <Box>
            <List>
                <ListItem>
                    <ListItemText primary={r.content}/>
                </ListItem>
            </List>
        </Box>
        </>
    )
};

export default UserReviews;