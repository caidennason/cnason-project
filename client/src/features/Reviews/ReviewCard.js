import React, { useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';
import CommentForm from '../Comments/CommentForm';
import CommentCard from '../Comments/CommentCard';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../Comments/commentsSlice';
import CommentDialog from '../Comments/CommentDialog';

function ReviewCard({reviews, establishments, user}){

    const comments = useSelector((state) => state.comments.entities)
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.entities)

    const currentUser = useSelector((state) => state.users.currentUser)
    console.log(currentUser)

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    console.log(user)
    console.log(users)
    console.log(reviews.reviewer_name)

    return(
        <Card>
            <CardContent>
                <Typography>
                    {reviews.content}
                </Typography>
                <Typography sx={{mb: 1.5, fontSize: 10}}>
                    {reviews.reviewer_name ? `Posted by ${reviews.reviewer_name}` : "Hmm...we aren't sure who left this one"}
                </Typography>
            </CardContent>
            {comments
            .filter((c) => c.review_id === reviews.id)
            .map((c) => {
                const user = c.user 
                return <CommentDialog key={c.id} c={c} user={user}/>
            })}
            {/* check this in the am if there's anything weird happening. made the .filter change */}
            <CommentForm reviews={reviews}/>
        </Card>
    )
}

export default ReviewCard