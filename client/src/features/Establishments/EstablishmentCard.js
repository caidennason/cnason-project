import React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardMedia, CardContent, Typography, IconButton, Button } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { deleteEstablishment, removeEstablishment } from './establishmentsSlice';


function EstablishmentCard({e, e:{name, location, bio, establishment_type, allows_dogs, photoUrl, id}}){

    const dispatch = useDispatch()
    const establishments = useSelector((state) => state)

    const handleNoImage = (e) => {
        e.target.onerror = null 
        e.target.src = "https://imgur.com/6Q01PXD"
    }


    return (
        <div>
            <br></br>
        <Card sx={{ maxWidth: 345, bgcolor: "peachpuff" }}>
            <CardHeader 
                title={name}
                subheader={location}
                action={<IconButton onClick={() => {
                    dispatch(deleteEstablishment(e))
                    }}>
                            <ClearIcon />
                        </IconButton>}
            />
            <CardContent>
                <Typography>
                   {bio}. Located in {location}. 
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Typography>
                <CardMedia 
                    component="img"
                    height="194"
                    image={ photoUrl ? photoUrl : "https://imgur.com/6Q01PXD.jpg" }
                    onError={handleNoImage}
                />
            </CardContent>
        </Card >
        </div>
    )
};

export default EstablishmentCard;