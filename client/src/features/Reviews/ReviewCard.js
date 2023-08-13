import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';

function ReviewCard({reviews, establishments, user}){

    console.log(reviews)
    console.log(user)

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
        </Card>
    )
}

export default ReviewCard