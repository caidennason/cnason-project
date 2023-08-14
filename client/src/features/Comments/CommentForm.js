import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UseSelector, UseDispatch } from 'react-redux/es/hooks/useSelector';
import { getCurrentUser } from '../Users/userSlice';

function CommentForm(){
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(' ');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        console.log(' clicking the comment button ')
        console.log(content)
    }
  
    return (
      <form onSubmit={handleCommentSubmit}>
        <TextField
              autoFocus
              multiline 
              maxRows={100}
              margin="dense"
              id="outlined-multiline-flexible"
              label="comment"
              type="string"
              fullWidth
              variant="standard"
              onChange={handleContentChange}
            />
            <Button type="submit" variant="outlined">
                Comment
            </Button>
      </form>
    );
  }

export default CommentForm

        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Comment here
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your comment here
            </DialogContentText>
            <TextField
              autoFocus
              multiline 
              maxRows={100}
              margin="dense"
              id="outlined-multiline-flexible"
              label="comment"
              type="string"
              fullWidth
              variant="standard"
              onChange={handleContentChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button type="submit">Comment</Button>
          </DialogActions>
        </Dialog> */}