import React, {useState, useEffect} from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from './userSlice';
import LoginErrorDialog from './LoginErrorDialog';
import { fetchEstablishments } from '../Establishments/establishmentsSlice';
import { getUsers, getCurrentUser } from './userSlice';

function Login(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoginErrorDialogOpen, setLoginErrorDialog] = useState(false)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        console.log('clicked')
        const user = {
            name: username, 
            password: password
        }
        dispatch(userLogin(user))
        .then((data) => {
            if (data.error) {
                console.error('Login failed', data.error.message)
                setLoginErrorDialog(true)
                setError(data.error.message)
            } else {
                console.log('logged in')
                navigate('/')
            }
        })
        .catch(error => {
            console.error('Login failed', error)
        })

    }

    return(
        <div>
            <LoginErrorDialog 
            isLoginErrorDialogOpen={isLoginErrorDialogOpen}
            onClose={() => setLoginErrorDialog(false)}
            error={error}
            />
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