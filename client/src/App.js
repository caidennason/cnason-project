import './App.css';
import React, {useState, useEffect} from 'react';
import Establishments from './features/Establishments/Establishments';
import User from './features/Users/User';
import HomePage from './features/Home/HomePage';
import Login from './features/Users/Login';
import Signup from './features/Users/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Typography, Button, AppBar, Toolbar, IconButton, Stack, Avatar } from '@mui/material';
import MenuIcon from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './features/Users/userSlice';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from './features/Users/userSlice';



function App() {

  // const [number, setNumber] = useState(0);

  // const addOne = () => {
  //   setNumber(number+1)
  // }

  const navigate = useNavigate()

  const currentUser = useSelector((state) => state.users.currentUser)
  // console.log(currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('dispatching get current user from app')
    dispatch(getCurrentUser())
    console.log(' request has been made, this is the current user: ', currentUser)
}, [])

console.log(currentUser, ' checking the current user outside of the useEffect')

  const handleSignout = () => {
    console.log(' clicking the signout button ... ')
    dispatch(signout())
    navigate('/login')
  }


  return (
    <div className="App">
      {/* {number}
      <Button variant="contained" onClick={addOne}>PLEASE</Button> */}
      {currentUser ? <Button onClick={handleSignout}>Logout</Button> : ' '}
      {currentUser ? `Signed in as ${currentUser.name}` : ' '}
    {/* <Router> */}

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
          {!currentUser ? <Button color='inherit' component={Link} to='/login'>Login</Button> : ' '}
          <Button color='inherit' component={Link} to='/signup'>Signup</Button>
        </Stack>
      </Toolbar>
    </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/establishments" element={<Establishments />} />
        <Route path="/profile" element={<User />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    {/* </Router> */}
    </div>
  );
}

export default App;
