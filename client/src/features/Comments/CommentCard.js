import React from 'react';
import CommentDialog from './CommentDialog';

function CommentCard({c, user}){

    console.log(c)

    return(
        <div>
            {/* <CommentDialog c={c} user={user}/> */}
        </div>
    )

    
}

export default CommentCard;

// const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };
  
//     return (
//       <div>
//         <Button variant="outlined" onClick={handleClickOpen}>
//           View Comments
//         </Button>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Comments"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               {c.content}
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             {/* <Button onClick={handleClose}>Disagree</Button> */}
//             <Button onClick={handleClose} autoFocus>
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );