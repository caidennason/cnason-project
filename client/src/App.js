import './App.css';
import React, {useState} from 'react';
import Establishments from './features/Establishments/Establishments';
import User from './features/Users/User';
import HomePage from './features/Home/HomePage';
import Login from './features/Users/Login';
import Signup from './features/Users/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Typography, Button, AppBar, Toolbar, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/material/Menu';



function App() {

  const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number+1)
  }


  return (
    <div className="App">
      {number}
      <Button variant="contained" onClick={addOne}>PLEASE</Button>
    <Router>

    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AcUnitIcon />
        </IconButton>
        <Typography variant='h6' style={{textDecoration: 'none'}}color='inherit' component={Link} to='/' sx={{flexGrow: 1}}>
          Dog Friendly
        </Typography>
        <Stack direction='row' spacing={2} >
          <Button color='inherit' component={Link} to='/'>Home</Button>
          <Button color='inherit' component={Link} to='/establishments'>Establishments</Button>
          <Button color='inherit' component={Link} to='/profile'>Profile</Button>
          <Button color='inherit' component={Link} to='/login'>Login</Button>
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
    </Router>
    </div>
  );
}

export default App;
