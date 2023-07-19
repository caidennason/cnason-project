import React, {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';


function Signup(){

    const [username, setUsername] = useState('Username')
    const [password, setPassword] = useState('Password')
    const [passwordConfirmation, setPasswordConfirmation] = useState('Confirm Password')
    const [location, setLocation] = useState('City, State')
    const [bio, setBio] = useState('Tell us About Yourself')
    const [photoUrl, setPhotoUrl] = useState('Photo Url (Optional)')

    const dispatch = useDispatch()

    const handleUsername = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handlePasswordConfirmation = (e) => {
        console.log(e.target.value)
        setPasswordConfirmation(e.target.value)
    }

    const handleLocation = (e) => {
        console.log(e.target.value)
        setLocation(e.target.value)
    }

    const handleBio = (e) => {
        console.log(e.target.value)
        setBio(e.target.value)
    }

    const handlePhotoUrl = (e) => {
        console.log(e.target.value)
        setPhotoUrl(e.target.value)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        console.log('check')
        const user = {
            username, 
            password, 
            passwordConfirmation, 
            location, 
            bio, 
            photoUrl
        }
        dispatch(addUser(user))
    }

    return(

        // MAKE THESE ALL REQUIRED BEFORE SUBMITTING // 
        <form onSubmit={handleSignup}>
            <br></br>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >Sign up for Dog Friendly!</h2>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handleUsername}  id="outlined-basic" label='Username' variant="outlined" />
            <TextField onChange={handlePassword} type={password} id="filled-basic" label='Password' variant="outlined" />
            <TextField onChange={handlePasswordConfirmation}  type='Confirm Password' id="filled-basic" label={passwordConfirmation} variant="outlined" />
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handleLocation}  id="outlined-basic" label='City, State' variant="outlined"/>
            <TextField onChange={handleBio}  id="outlined-multiline-flexible" multiline maxRows={5} label='Tell us About Yourself' variant="outlined"/>
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handlePhotoUrl} id="outlined-multiline-flexible" multiline maxRows={5} label='Photo Url (Optional)' variant="outlined"/>
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Button type='submit' variant='contained'>Sign up</Button>
        </Box>
        </form>

        
    );
};

export default Signup;