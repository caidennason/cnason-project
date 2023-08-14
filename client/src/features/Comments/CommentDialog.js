import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useSelector, UseDispatch } from 'react-redux/es/hooks/useSelector';

function CommentDialog({c, user}){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const contentPreview = c.content.slice(0, 9)
  
    return (
      <div>
        <Button 
        variant="outlined" 
        onClick={handleClickOpen}
        maxWidth="md"
        style={{minWidth: "120px"}}
        >
          {contentPreview}..
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        //   maxWidth="md"
        //   minWidth="300px"
        >
          <DialogTitle id="alert-dialog-title">
            {"Comments"}
          </DialogTitle>
          <DialogContent >
            <DialogContentText id="alert-dialog-description">
              {c.content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default CommentDialog;