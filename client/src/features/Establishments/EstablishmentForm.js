import React, {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { addEstablishment } from './establishmentsSlice';


function EstablishmentForm(){

    const [establishmentName, setEstablishmentName] = useState('Establishment Name')
    const [establishmentLocation, setEstablishmentLocation] = useState('Location')
    const [establishmentType, setEstablishmentType] = useState('Type (Restaurant, Bar, etc)')

    const dispatch = useDispatch();

    const handleEstablishmentNameChange = (e) => {
        console.log(e.target.value)
        setEstablishmentName(e.target.value)
    }

    const handleEstablishmentLocationChange = (e) => {
        console.log(e.target.value)
        setEstablishmentLocation(e.target.value)
    }

    const handleEstablishmentTypeChange = (e) => {
        console.log(e.target.value)
        setEstablishmentType(e.target.value)
    }

    const handleEstablishmentSubmission = (e) => {
        e.preventDefault()
        const establishment = {
            establishmentName, 
            establishmentLocation,
            establishmentType
        }
        dispatch(addEstablishment(establishment))
    }

 
    return(
        <form onSubmit={handleEstablishmentSubmission}>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField id="outlined-basic" onChange={handleEstablishmentNameChange} label='Establishment Name' variant="outlined" />
                <TextField id="outlined-basic" onChange={handleEstablishmentLocationChange} label='Location' variant="outlined" />
            </Box>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField id="outlined-basic" onChange={handleEstablishmentTypeChange} label='Type (Restaurant, Bar, etc)' variant="outlined"/>
            </Box>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Button type='submit' variant='contained'>Submit</Button>
            </Box>
        </ form>
    )
}

export default EstablishmentForm