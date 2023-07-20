import React, {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from "react-redux";
import { addEstablishment, postEstablishment } from './establishmentsSlice';


function EstablishmentForm(){

    const [establishmentName, setEstablishmentName] = useState('Establishment Name')
    const [establishmentLocation, setEstablishmentLocation] = useState('Location')
    const [establishmentType, setEstablishmentType] = useState('Type (Restaurant, Bar, etc)')
    const [establishmentDescription, setEstablishmentDescription] = useState('Short Description')
    const [establishmentPhotoUrl, setEstablishmentPhotoUrl] = useState('Phot URL (Optional)')
    const [allowsDogs, setAllowsDogs] = useState(false)

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

    const handleEstablishmentDescriptionChange = (e) => {
        console.log(e.target.value)
        setEstablishmentDescription(e.target.value)
    }

    const handleEstablishmentPhotoUrlChange = (e) => {
        console.log(e.target.value)
        setEstablishmentPhotoUrl(e.target.value)
    }

    const handleAllowsDogs = (e) => {
        console.log(e.target.checked)
        setAllowsDogs(e.target.checked)
    }

    const reset = () => {
        setEstablishmentName('Establishment Name')
        setEstablishmentLocation('Location')
        setEstablishmentType('Type (Restaurant, Bar, etc)')
        setEstablishmentPhotoUrl('Photo Url (Optional)')
        setAllowsDogs(false)
    }

    const handleEstablishmentSubmission = (e) => {
        e.preventDefault()
        const establishment = {
            name: establishmentName, 
            location: establishmentLocation,
            establishment_type: establishmentType,
            bio: establishmentDescription,
            photo: establishmentPhotoUrl,
            allows_dogs: allowsDogs,
        };
        // dispatch(addEstablishment(establishment))
        dispatch(postEstablishment(establishment))
            .then((res) => res)
            // .then((data) => {
            //     console.log(data, 'sending to rails')
            // })
            .then((data) => data)
    }

    // console.log(allowsDogs, 'see if it works')

 
    return(
        <form onSubmit={handleEstablishmentSubmission}>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField id="outlined-basic" onChange={handleEstablishmentNameChange} label='Establishment Name' variant="outlined"/>
                <TextField id="outlined-basic" onChange={handleEstablishmentLocationChange} label='Location' variant="outlined" />
            </Box>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField id="outlined-basic" onChange={handleEstablishmentTypeChange} label='Type (Restaurant, Bar, etc)' variant="outlined" />
                <TextField id="outlined-basic" onChange={handleEstablishmentDescriptionChange} label='Description of the Establishment' variant="outlined" />
            </Box>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField  id="outlined-basic" onChange={handleEstablishmentPhotoUrlChange} label='Photo Url (Optional)' variant="outlined" />
            </Box>
            <FormGroup style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <FormControlLabel control={<Checkbox defaultChecked onClick={handleAllowsDogs}/>} label="Allows Dogs" />
            </FormGroup>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Button type='submit' variant='contained'>Submit</Button>
            </Box>
        </ form>
    )
}

export default EstablishmentForm