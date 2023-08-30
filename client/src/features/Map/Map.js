import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

function Map() {
  const libraries = ['places'];
  const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const [markerPositions, setMarkerPosition] = useState([])
  const [address, setAddress] = useState('');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: api_key,
    libraries,
  });

  const onLoad = (autocomplete) => {
    console.log('Autocomplete loaded: ', autocomplete);
  };

  const onPlaceChanged = async (address) => {
    try {
      setAddress(address);
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
      <Autocomplete onLoad={onLoad} onPlaceChanged={() => onPlaceChanged(address)}>
        <input
          type="text"
          placeholder="Enter a location"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </Autocomplete>

      <GoogleMap
        zoom={12}
        center={selectedLatLng || { lat: 34.5362, lng: -117.2928 }}
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