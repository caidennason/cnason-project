import React, {useEffect} from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function UserReviews({r}){

    const dispatch = useDispatch()

    console.log(r)

    //    useEffect(() => {
    //     dispatch(getCurrentUser())
    // }, [dispatch])

    return(
        <>

        <TableContainer>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{r.content}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
        {/* <Box>
            <List>
                <ListItem>
                    <ListItemText primary={r.content}/>
                </ListItem>
            </List>
        </Box> */}
        </>
    )
};

export default UserReviews;