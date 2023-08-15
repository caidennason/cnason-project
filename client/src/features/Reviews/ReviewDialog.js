import React from 'react';
import {Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

function ReviewDialog({isDialogOpen, error, onClose}){

    return(
        <>
        <Dialog open={isDialogOpen} onClose={onClose}>
            <DialogTitle>Error</DialogTitle>
                <DialogContent>
                    <DialogContentText>{error}</DialogContentText>
                </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default ReviewDialog;