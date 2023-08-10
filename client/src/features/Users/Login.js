import React, {useState} from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userLogin } from './userSlice';

function Login(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        console.log('clicked')
        navigate('/profile')
        const user = {
            username, 
            password
        }
        dispatch(userLogin(user))
    }

    return(
        <div>
            <br></br>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Log In</h2>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField required onChange={handleUsernameChange} id="outlined-basic" label="Username" variant="outlined" />
            </Box>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField required onChange={handlePasswordChange} id="filled-basic" label="Password" variant="outlined" />
            </Box>
            <br></br>
            <Box variant='contained' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Button onClick={handleLogin} variant='contained' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Sign in</Button>
            </Box>
        </div>
    )
}

export default Login