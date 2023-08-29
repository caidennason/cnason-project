import './App.css';
import React, {useEffect} from 'react';
import Establishments from './features/Establishments/Establishments';
import User from './features/Users/User';
import HomePage from './features/Home/HomePage';
import Login from './features/Users/Login';
import Signup from './features/Users/Signup';
import Map from './features/Map/Map';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Typography, Button, AppBar, Toolbar, Stack, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './features/Users/userSlice';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from './features/Users/userSlice';



function App() {

  const navigate = useNavigate()

  const currentUser = useSelector((state) => state.users.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
}, [dispatch])

  const handleSignout = () => {
    dispatch(signout())
    navigate('/login')
  }

  return (
    <div className="App">

      {currentUser ? <Button onClick={handleSignout}>Logout</Button> : ' '}
      {currentUser ? `Signed in as ${currentUser.name}` : ' '}

    <AppBar position="static">
      <Toolbar>
        <Avatar src='https://imgur.com/6Q01PXD.jpg' /> 
        <Typography variant='h6' style={{textDecoration: 'none'}}color='inherit' component={Link} to='/' sx={{flexGrow: 1}}>
          Dog Friendly
        </Typography>
        <Stack direction='row' spacing={2} >
          {<Button color='inherit' component={Link} to='/'>Home</Button>}
          {currentUser ? <Button color='inherit' component={Link} to='/establishments'>Establishments</Button> : ' '}
          {currentUser ? <Button color='inherit' component={Link} to='/profile'>Profile</Button> : ' '}
          {currentUser ? <Button color='inherit' component={Link} to='/map'>Map</Button> : ' '}
          {!currentUser ? <Button color='inherit' component={Link} to='/login'>Login</Button> : ' '}
          {!currentUser ? <Button color='inherit' component={Link} to='/signup'>Signup</Button> : ' '}
        </Stack>
      </Toolbar>
    </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/establishments" element={<Establishments />} />
        <Route path="/profile" element={<User />} />
        <Route path='/map' element={<Map />}/>
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;