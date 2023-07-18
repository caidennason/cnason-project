import React, {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';

function Signup(){

    const [username, setUsername] = useState('Username')
    const [password, setPassword] = useState('Password')
    const [passwordConfirmation, setPasswordConfirmation] = useState('Confirm Password')
    const [location, setLocation] = useState('Location')
    const [bio, setBio] = useState('Bio')
    const [photoUrl, setPhotoUrl] = useState('Photo Url (Optional)')

    const handleUsername = (e) => {
        console.log(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value)
    }

    const handlePasswordConfirmation = (e) => {
        console.log(e.target.value)
    }

    const handleLocation = (e) => {
        console.log(e.target.value)
    }

    const handleBio = (e) => {
        console.log(e.target.value)
    }

    const handlePhotoUrl = (e) => {
        console.log(e.target.value)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        setUsername('Username')
        console.log('clicked')
    }

    return(

        // MAKE THESE ALL REQUIRED BEFORE SUBMITTING // 
        <form onSubmit={handleSignup}>
            <br></br>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >Sign up for Dog Friendly!</h2>
            <br></br>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handleUsername}  id="outlined-basic" label={username} variant="outlined" />
            <TextField onChange={handlePassword}  id="filled-basic" label={password} variant="outlined" />
            <TextField onChange={handlePasswordConfirmation}  id="filled-basic" label={passwordConfirmation} variant="outlined" />
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handleLocation}  id="outlined-basic" label={location} variant="outlined"/>
            <TextField onChange={handleBio}  id="outlined-multiline-flexible" multiline maxRows={5} label={bio} variant="outlined"/>
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handlePhotoUrl} id="outlined-multiline-flexible" multiline maxRows={5} label={photoUrl} variant="outlined"/>
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Button type='submit' variant='contained'>Sign up</Button>
        </Box>
        </form>

        
    );
};

export default Signup;