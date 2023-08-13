import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';


function UserEstablishments({e}){

    // console.log(e)

    return(
        <>
        <Box>
            <List>
                <ListItem>
                    <ListItemText primary={`${e.name}, a ${e.establishment_type.toLowerCase()} in ${e.location}.`}/>
                </ListItem>
            </List>
        </Box>
        </>
    )
}

export default UserEstablishments;