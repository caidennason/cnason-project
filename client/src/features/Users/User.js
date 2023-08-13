import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Box } from '@mui/material';
import UserReviews from './UserReviews';
import UserEstablishments from './UserEstablishments';


function User(){

    const currentUser = useSelector((state) => state.users.currentUser);

    console.log(currentUser);

    return(
        <div>
            {currentUser ? `Welcome, ${currentUser.name}!` : ' '}
            <br></br>
            Your Reviews
            {currentUser && currentUser.reviews.map((r) => {
                return <UserReviews r={r} />
            })}
            Your Establishments
            {currentUser && currentUser.establishments.map((e) => {
                return <UserEstablishments e={e} />
            })}
            
        </div>
    )
}

export default User;