import React, { useEffect } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';
import CommentForm from '../Comments/CommentForm';
import CommentCard from '../Comments/CommentCard';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../Comments/commentsSlice';

function ReviewCard({reviews, establishments, user}){

    console.log(reviews)
    console.log(user)

    const comments = useSelector((state) => state.comments.entities)
    console.log(comments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    return(
        <Card>
            <CardContent>
                <Typography>
                    {reviews.content}
                </Typography>
                <Typography sx={{mb: 1.5, fontSize: 10}}>
                    {user ? `Posted by ${user.name}` : ' '}
                </Typography>
            </CardContent>
            {comments
            .filter((c) => c.review_id === reviews.id)
            .map((c) => {
                const user = c.user 
                return <CommentCard key={c.id} c={c} user={user}/>
            })}
            {/* check this in the am if there's anything weird happening. made the .filter change */}
            <CommentForm reviews={reviews}/>
        </Card>
    )
}

export default ReviewCard