import React from 'react';
import { Card, CardHeader, CardContent, CardMedia } from '@mui/material';

function ReviewCard({reviews}){

    return(
        <Card>
            <CardContent>
                {reviews.content}
            </CardContent>
        </Card>
    )
}

export default ReviewCard