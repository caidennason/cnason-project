import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage(){

    const navigate = useNavigate()

    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <br></br>
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Welcome to Dog Friendly</h1>
            <img src='https://i.imgur.com/0EfvPsZ.jpg'/>
            {/* Put images of the dogs and restaurants here */}

        </div>
    )
}

export default HomePage;