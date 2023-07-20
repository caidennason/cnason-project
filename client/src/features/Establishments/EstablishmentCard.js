import React from "react";
import { styled } from "@mui/material/styles";
import {Card, CardHeader, CardMedia, CardContent, Typography} from "@mui/material"

function EstablishmentCard({e, e:{name, location, bio, establishment_type, allows_dogs, photoUrl}}){

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
            />
            <CardContent>
                <Typography>
                   {bio}. Located in {location}. 
                </Typography>
                <CardMedia 
                    component="img"
                    height="194"
                    image={ photoUrl ? photoUrl : "https://imgur.com/6Q01PXD.jpg" }
                    onError={handleNoImage}
                />
            </CardContent>
        </Card>
        </div>
    )
};

export default EstablishmentCard;