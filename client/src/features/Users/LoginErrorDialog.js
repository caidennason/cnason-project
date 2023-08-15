import React from 'react'
import {Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

function LoginErrorDialog({onClose, isLoginErrorDialogOpen, error}){

    return(
        <>
            <Dialog open={isLoginErrorDialogOpen} onClose={onClose}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <DialogContentText>{error}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button ></Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default LoginErrorDialog