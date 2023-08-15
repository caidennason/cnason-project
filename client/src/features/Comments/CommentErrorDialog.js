import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CommentErrorDialog({error, onClose, isDialogOpen}){

    return(
        <Dialog open={isDialogOpen} onClose={onClose}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <DialogContentText>{error}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}></Button>
            </DialogActions>
        </Dialog>
    )
}

export default CommentErrorDialog