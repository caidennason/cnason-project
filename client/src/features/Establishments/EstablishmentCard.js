import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Item, Card, CardHeader, CardMedia, CardContent, Typography, IconButton, Button, Select, InputLabel, TextField, FormControlLabel, NativeSelect, MenuItem, FormControl, Checkbox } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import establishmentsSlice, { deleteEstablishment, updateEstablishment } from './establishmentsSlice';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PetsIcon from '@mui/icons-material/Pets';
import SickIcon from '@mui/icons-material/Sick';
import Reviews from "../Reviews/Reviews";
import ErrorDialog from "./ErrorDialog";
import EstablishmentErrorDialog from "./EstablishmentErrorDialog";
import { getCurrentUser } from "../Users/userSlice";


function EstablishmentCard({e, photo, e:{name, location, bio, establishment_type, allows_dogs, id}}){

    const dispatch = useDispatch()

    console.log(e)

    const [selectedItem, setSelectedItem] = useState(null);
    const [updatedDescription, setUpdatedDescription] = useState(bio);
    const [updatedName, setUpdatedName] = useState(name);
    const [updatedPhotoUrl, setUpdatedPhotoUrl] = useState(photo);
    const [updatedType, setUpdatedType] = useState(establishment_type);
    const [updatedLocation, setUpdatedLocation] = useState(location);
    const [updatedAllowsDogs, setUpdatedAllowsDogs] = useState(allows_dogs);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false)
    const [errorDialogMessage, setErrorDialogMessage] = useState('')

    const [isDialogOpen, setDialog] = useState(false)
    const [error, setError] = useState('')

    const handleNoImage = (e) => {
        e.target.onerror = null 
        e.target.src = "https://i.imgur.com/6Q01PXD.jpg"
    };

    const currentUser = useSelector((state) => state.users.currentUser);

    useEffect(() => {
        dispatch(getCurrentUser())
        
    }, [dispatch])

    console.log(currentUser)

    const editid = e.id;
    console.log(e)

    const errorMessage = useSelector((state) => state.establishments.error)
    console.log(errorMessage)

    const updatedEstablishmentObject = {
        id: editid,
        name: updatedName, 
        establishment_type: updatedType,
        photo: updatedPhotoUrl, 
        allows_dogs: updatedAllowsDogs,
        bio: updatedDescription,
        location: updatedLocation
    };

    const petsIcon = () => {
        return <IconButton>
            <PetsIcon />
        </IconButton>
    };

    const sickoIcon = () => {
        return <IconButton>
            <SickIcon />
        </IconButton>
    };

    const handleAllowsDogsChange = (e) => {
        setUpdatedAllowsDogs(!updatedAllowsDogs)
    };

    const resetEditForm = () => {
        setUpdatedDescription('')
        setUpdatedLocation('')
        setUpdatedName('')
        setUpdatedPhotoUrl('')
        setUpdatedType('')
    }

    const submitEdit = (e, updatedEstablishmentObject) => {
        e.preventDefault()
        dispatch(updateEstablishment(updatedEstablishmentObject))
        .then((data) => {
            if (data.error) {
                setDialog(true)
                setError(data.error.message)
            } else {
                console.log( ' all good ')
            }
        })
        resetEditForm()
    };

    const handleDescriptionChange = (e) => {
        setUpdatedDescription(e.target.value)
    };

    const handleNameChange = (e) => {
        setUpdatedName(e.target.value)
    };

    const handlePhotoUrlChange = (e) => {
        setUpdatedPhotoUrl(e.target.value)
    };

    const handleTypeChange = (e) => {
        setUpdatedType(e.target.value)
    };

    const handleLocationChange = (e) => {
        setUpdatedLocation(e.target.value)
    };


    return (
        <div>
            <br></br>
        <Card sx={{ maxWidth: 345, bgcolor: "peachpuff" }}>
            <EstablishmentErrorDialog 
            isDialogOpen={isDialogOpen}
            onClose={() => setDialog(false)}
            error={error}
            />
            <ErrorDialog 
                isErrorDialogOpen={isErrorDialogOpen}
                onClose={() => setIsErrorDialogOpen(false)}
                errorDialogMessage={errorDialogMessage}
            />
            <CardHeader 
                title={name}
                subheader={`Located in ${location}`}
                action={<IconButton onClick={() => {
                    dispatch(deleteEstablishment(e))
                    .unwrap()
                    .catch(error => {
                        console.error("Error deleting establishment from the card", error)
                        setErrorDialogMessage("Error deleting establishment: " + 'You can only delete an establishment you created.'); // Set the error message
                        setIsErrorDialogOpen(true);
                    });
                    }}>
                            <ClearIcon />
                        </IconButton>}
            />
            <CardContent>
                <Typography>
                   {bio}. Located in {location}. 
                </Typography>
                <CardMedia 
                    component="img"
                    height="194"
                    image={ photo ? photo : "https://i.imgur.com/6Q01PXD.jpg" }
                    onError={handleNoImage}
                />
                <Typography>
                    {establishment_type ? establishment_type : "user didn/'t specify what type of place this is"}
                </Typography>
                <Typography> 
                    {allows_dogs == true ? (
                        <>
                        Bring your dog!{petsIcon()}
                        </>
                    ) : (
                        <>
                        They don't allow dogs!{sickoIcon()}
                        </>
                    )}
                </Typography>
            </CardContent>
            
                { currentUser.id === e.user?.id ? <form onSubmit={(e => submitEdit(e, updatedEstablishmentObject))}>
                    <FormControl variant="outlined" sx={{boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
                        <Select
                            IconComponent={EditIcon}
                            value={selectedItem}
                            onChange={(e) => setSelectedItem(e.target.value)}
                        >
                            <MenuItem value="description">Edit Description</MenuItem>
                            <MenuItem value="name">Edit Name</MenuItem>
                            <MenuItem value="photoUrl">Edit Photo Url</MenuItem>
                            <MenuItem value="establishmentType">Edit Type</MenuItem>
                            <MenuItem value="location">Edit Location</MenuItem>
                            <MenuItem value="allowsDogs">Edit Allows Dogs</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" color='inherit' sx={{marginTop: '10px'}} variant='outlined'>Edit</Button>
                </form> : ' '}

                {selectedItem === 'description' && (
                    <TextField label="Description" value={updatedDescription} onChange={handleDescriptionChange}/>
                )}
                
                {selectedItem === 'name' && (
                    <TextField label="Name" value={updatedName} onChange={handleNameChange}/>
                )}

                {selectedItem === 'photoUrl' && (
                    <TextField label="Photo Url" value={updatedPhotoUrl} onChange={handlePhotoUrlChange}/>
                )}

                {selectedItem === 'establishmentType' && (
                    <TextField label="Type" value={updatedType} onChange={handleTypeChange} />
                )}

                {selectedItem === 'location' && (
                    <TextField label="Location" value={updatedLocation} onChange={handleLocationChange}/>
                )}

                {selectedItem === 'allowsDogs' && (
                    <FormControlLabel
                    control={ <Checkbox checked={updatedAllowsDogs} onChange={handleAllowsDogsChange} /> }
                    label={updatedAllowsDogs ? "Allows Dogs" : "Doesn't allow dogs"}
                    />
                )}

        </Card >
                    <Reviews establishments={e} name={e.name}/>
        </div>
        
    )
};

export default EstablishmentCard;

// changing photo to photo url and checking false are breaking post'

{/* <form onSubmit={submitEdit}> */}
            {/* <Select 
                sx={{boxShadow:'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}}
                IconComponent={EditIcon}
                >
                <MenuItem>
                    <TextField onChange={handleDescriptionChange} label="Description"/>
                </MenuItem> */}
                {/* <MenuItem>
                    <TextField label="Location"/>
                </MenuItem>
                <MenuItem>
                 <TextField label="Photo URL"/>
                </MenuItem>
                <MenuItem>
                    <TextField label="Establishment Type"/>
                </MenuItem> */}
                {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">Allows Dogs</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={updatedAllowsDogs}
                        label="Allows Dogs"
                        // onChange={handleAllowsDogsChange}
                        >
                        <MenuItem value={true}>Allows Dogs!</MenuItem>
                        <MenuItem value={false}>Doesn't Allow Dogs</MenuItem>
                        </Select>
                </FormControl> */}