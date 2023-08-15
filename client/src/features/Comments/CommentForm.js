import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../Users/userSlice';
import { postComment } from './commentsSlice';
import CommentErrorDialog from './CommentErrorDialog';


function CommentForm({reviews}){

    const dispatch = useDispatch()

    const [content, setContent] = useState(' ');

    const currentUser = useSelector((state) => state.users.currentUser)
    console.log(currentUser)

    const [isDialogOpen, setDialog] = useState(false)
    const [error, setError] = useState('')


    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const commentObject = {
        content: content, 
        user_id: currentUser.id,
        review_id: reviews.id
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        dispatch(postComment(commentObject))
        .then((data) => {
            if (data.error) {
                setDialog(true)
                setError(data.error.message)
            } else {
                console.log( ' all good ')
            }
        })
    }
  
    return (
      <form onSubmit={handleCommentSubmit}>
        <CommentErrorDialog
        isDialogOpen={isDialogOpen}
        onClose={() => setDialog(false)}
        error={error}
        />
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