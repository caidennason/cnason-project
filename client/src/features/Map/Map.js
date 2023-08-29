import React, {useEffect} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Map(){


    const api_key = process.env.REACT_APP_GOOGLE_API_KEY

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: api_key,
    });

    if (loadError) return <div>Error loading map</div>
    if (!isLoaded) return <div>Loading...</div>

    return(
        <div style={{ width: '80%', height: '80vh', margin: 'auto' }}>
        <GoogleMap 
        zoom={12} 
        center={{lat:34.5362, lng: -117.2928}}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        >
            hi






            hi
        </GoogleMap>
        </div>
    )
}

export default Map;

