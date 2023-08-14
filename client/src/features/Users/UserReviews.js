import React, {useEffect} from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';

function UserReviews({r}){

    const dispatch = useDispatch()

    console.log(r)

    //    useEffect(() => {
    //     dispatch(getCurrentUser())
    // }, [dispatch])

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