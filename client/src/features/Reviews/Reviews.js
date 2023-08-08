import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { postReview } from '../Establishments/establishmentsSlice';
import ReviewCard from './ReviewCard';

function Reviews({establishments, name}){

    console.log(establishments)

    const [reviewContent, setReviewContent] = useState('')

    const dispatch = useDispatch();

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleReviewChange = (e) => {
        setReviewContent(e.target.value)
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault()
        const reviewObject = {
            content: reviewContent, 
            establishment_id:establishments.id
        }
        console.log(reviewObject)
        dispatch(postReview(reviewObject))
        console.log(establishments.reviews)
    }

    return (
<div>
    <Card sx={{ maxWidth: 345 }}>
        <CardActions disableSpacing>
            <Typography aria-label="add to favorites">
            Reviews of {name}
            </Typography>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {establishments.reviews.map((reviews) => {
                return <ReviewCard reviews={reviews}/>
            })}
        </CardContent>
    <form onSubmit={handleReviewSubmit}>
        <Box>
            <TextField onChange={handleReviewChange} multiline id='outlined-multiline-flexible' maxrows={100} sx={{marginLeft: '5px', marginBottom: '2px'}} label="Submit a review!"/>   
            <Button type='submit' color='inherit' variant='outlined' sx={{marginTop: '10px', marginLeft: '28px'}}>submit</Button>
        </Box>
    </form>
    </Collapse>
    </Card>
</div>

    )

    
}

// {establishments.reviews.map((review) => (
//     <ReviewCard key={review.id} review={review} />
//   ))}



export default Reviews

{/* <div>
      <h2>{establishment.name}</h2>
      <h3>Reviews:</h3>
      {establishment.reviews.map((review) => (
        <div key={review.id}>
          <p>{review.content}</p>
          {/* Display other review properties here */}
    //     </div>
    //   ))}
    // </div> */}