import React, {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signup } from './userSlice';
import { useNavigate } from 'react-router-dom';


function Signup(){

    const [username, setUsername] = useState('Username')
    const [password, setPassword] = useState('Password')
    const [passwordConfirmation, setPasswordConfirmation] = useState('Confirm Password')
    const [location, setLocation] = useState('City, State')
    const [bio, setBio] = useState('Tell us About Yourself')
    const [photoUrl, setPhotoUrl] = useState('Photo Url (Optional)')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const handleBio = (e) => {
        setBio(e.target.value)
    }

    const handlePhotoUrl = (e) => {
        setPhotoUrl(e.target.value)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        console.log('check')
        const user = {
            name: username, 
            password: password, 
            password_confirmation: passwordConfirmation, 
            location: location, 
            bio: bio, 
            photo: photoUrl
        }
        dispatch(signup(user))
        .then((data) => {
            if (data.error) {
                alert('Make sure to fill out all the required forms!')
            } else {
                navigate('/profile')
            }
        })
        .catch(error => {
            console.error('Signup failed')
        })
        // navigate('/profile')
    }

    return(

        // MAKE THESE ALL REQUIRED BEFORE SUBMITTING // 
        <form onSubmit={handleSignup}>
            <br></br>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >Sign up for Dog Friendly!</h2>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handleUsername}  required id="outlined-basic" label='Username' variant="outlined" />
            <TextField onChange={handlePassword} required type="password" id="filled-basic" label='Password' variant="outlined" />
            <TextField onChange={handlePasswordConfirmation}  required type='password' id="filled-basic" label={passwordConfirmation} variant="outlined" />
        </Box>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
            <TextField onChange={handleLocation} required id="outlined-basic" label='City, State' variant="outlined"/>
            <TextField onChange={handleBio}  required id="outlined-multiline-flexible" multiline maxRows={5} label='Tell us About Yourself' variant="outlined"/>
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