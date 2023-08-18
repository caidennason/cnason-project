import React, {useState} from 'react';
import { TextField, Box, Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import {  postEstablishment } from './establishmentsSlice';
import EstablishmentErrorDialog from './EstablishmentErrorDialog';


function EstablishmentForm(){

    const [establishmentName, setEstablishmentName] = useState('')
    const [establishmentLocation, setEstablishmentLocation] = useState('')
    const [establishmentType, setEstablishmentType] = useState('')
    const [establishmentDescription, setEstablishmentDescription] = useState('')
    const [establishmentPhotoUrl, setEstablishmentPhotoUrl] = useState('')
    const [allowsDogs, setAllowsDogs] = useState(true)

    const errorMessage = useSelector((state) => state.establishments.errors)

    const [error, setError] = useState('')
    const [isDialogOpen, setDialog] = useState(false)

    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.users.currentUser)
    console.log(currentUser)

    const handleEstablishmentNameChange = (e) => {
        setEstablishmentName(e.target.value)
    }

    const handleEstablishmentLocationChange = (e) => {
        setEstablishmentLocation(e.target.value)
    }

    const handleEstablishmentTypeChange = (e) => {
        setEstablishmentType(e.target.value)
    }

    const handleEstablishmentDescriptionChange = (e) => {
        setEstablishmentDescription(e.target.value)
    }

    const handleEstablishmentPhotoUrlChange = (e) => {
        setEstablishmentPhotoUrl(e.target.value)
    }

    const handleAllowsDogs = (e) => {
        setAllowsDogs(!allowsDogs)
    }

    const reset = () => {
        setEstablishmentName('')
        setEstablishmentLocation('')
        setEstablishmentType('')
        setEstablishmentPhotoUrl('')
        setEstablishmentDescription('')
        setAllowsDogs(true)
    }

    const handleEstablishmentSubmission = (e) => {
        console.log('click')
        e.preventDefault()
        dispatch(postEstablishment({
            name: establishmentName, 
            photo: establishmentPhotoUrl,
            establishment_type: establishmentType,
            location: establishmentLocation,
            bio: establishmentDescription,
            allows_dogs: allowsDogs,
            user_id: currentUser.id
        }))
        .then((data) => {
            if (data.error) {
                console.log('Error', data)
                setDialog(true)
                setError(data.error.message)
            } else {
                console.log('all good')
            }
        })
            reset()
    }

    return(
        <form onSubmit={handleEstablishmentSubmission}>
            <EstablishmentErrorDialog 
            isDialogOpen={isDialogOpen}
            onClose={() => setDialog(false)}
            error={error}
            />

            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField  id="outlined-basic" onChange={handleEstablishmentNameChange} label='Establishment Name' variant="outlined" value={establishmentName}/>
                <TextField  id="outlined-basic" onChange={handleEstablishmentLocationChange} label='Location' variant="outlined" value={establishmentLocation}/>
            </Box>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField  id="outlined-basic" onChange={handleEstablishmentTypeChange} label='Type (Restaurant, Bar, etc)' variant="outlined" value={establishmentType}/>
                <TextField  id="outlined-basic" onChange={handleEstablishmentDescriptionChange} label='Description of the Establishment' variant="outlined" value={establishmentDescription}/>
            </Box>
            <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TextField  id="outlined-basic" onChange={handleEstablishmentPhotoUrlChange} label='Photo Url (Optional)' variant="outlined" value={establishmentPhotoUrl} />
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