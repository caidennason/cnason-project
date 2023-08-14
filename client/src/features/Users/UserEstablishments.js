import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function UserEstablishments({e}){

    console.log(e)

    return(
        <>
        <TableContainer>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{e.name}, a {e.establishment_type.toLowerCase()} located in {e.location}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
        </>
    )
}

export default UserEstablishments;