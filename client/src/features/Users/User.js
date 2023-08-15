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
            {currentUser ? <h2>Welcome, {currentUser.name}!</h2> : null}
            <br />
            About me: {currentUser ? currentUser.bio : ''}
                <p>Your Reviews:</p>
            <p></p>
            {currentUser && currentUser.reviews ? (
                currentUser.reviews.map((r) => <UserReviews r={r} />)
            ) : null}
            <p>Your Establishments:</p>
            <p> </p>
            {currentUser && currentUser.establishments ? (
                currentUser.establishments.map((e) => <UserEstablishments e={e} />)
            ) : null}
        </div>
    )
}

export default User;