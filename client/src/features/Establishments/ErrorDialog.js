import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ErrorDialog({isErrorDialogOpen, onClose, errorDialogMessage}){

    return(
        <Dialog open={isErrorDialogOpen} onClose={onClose}>
            <DialogTitle>Fill out the following:</DialogTitle>
            <DialogContent>
                <DialogContentText>{errorDialogMessage}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}></Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorDialog