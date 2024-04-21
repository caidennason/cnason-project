import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';
import { GoogleMap, useLoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

function Map() {
  const libraries = ['places'];
  const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const [markerPositions, setMarkerPosition] = useState([])
  const [address, setAddress] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(() => {
    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords
          setCurrentLocation({lat: latitude, lng: longitude})
        }, 
        error => {
          console.error("Error getting current location: ", error)
        }
      )
    } else {
      console.log("Geolocation is not available in this browser.")
    }
  }, [])

  console.log(currentLocation)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: api_key,
    libraries,
  });

  const onLoad = (autocomplete) => {
    console.log('Autocomplete loaded: ', autocomplete);
  };

  const onPlaceChanged = async () => {
    try {
    //   setAddress(address);
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setSelectedLatLng(latLng);
      setMarkerPosition([...markerPositions, latLng]);
    } catch (error) {
      console.error('Error selecting location:', error);
    }
  };

  console.log(markerPositions)
  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ width: '80%', height: '80vh', margin: 'auto' }}>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <TextField
          type="text"
          placeholder="Enter a location"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
         Make sure to write the complete address (ex: Minnows Bar, rather than Minnows)!
        </Box>
      </Autocomplete>

      <GoogleMap
        zoom={12}
        // center={selectedLatLng || { lat: 40.6782, lng: -73.9442 }}
        center={selectedLatLng || { lat: 40.6782, lng: -73.9442 }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
      >
        {markerPositions.map((position, index) => (
          <Marker key={index} position={position} /> 
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;