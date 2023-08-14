import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Box } from '@mui/material';
import UserReviews from './UserReviews';
import UserEstablishments from './UserEstablishments';
import { getCurrentUser } from './userSlice';


function User(){

    const currentUser = useSelector((state) => state.users.currentUser);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUser())
        
    }, [dispatch])

    console.log(currentUser)



    return(
        <div>
            {currentUser ? <h2>Welcome, {currentUser.name}!</h2> : ' '}
            <br></br>
            {/* About me: {currentUser.bio} */}
            About me: { currentUser ? currentUser.bio : ' '}
            <p>Your Reviews:</p>
            <p></p>
            {currentUser && currentUser.reviews.map((r) => {
                return <UserReviews r={r} />
            })}
            {/* {currentUser.establishments.length === 0 ? ' ' : 'Your Establishments'} */}
            <p>Your Establishments:</p>
            <p> </p>
            {currentUser && currentUser.establishments.map((e) => {
                return <UserEstablishments e={e} />
            })}
            
        </div>
    )
}

export default User;