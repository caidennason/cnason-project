import React, {useState} from 'react';
import { GoogleMap, useLoadScript, Marker, Autocomplete } from '@react-google-maps/api'
// import Autocomplete from './Autocomplete';

function Map(){

    const libraries = ['places'];
    const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
    const [selected, setSelected] = useState(null);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: api_key,
        libraries,
        // libraries: ["places"],
    });

    const onLoad = (autocomplete) => {
        console.log('Autocomplete loaded: ', autocomplete);
    };

    const onPlaceChanged = () => {

    };

    if (loadError) return <div>Error loading map</div>
    if (!isLoaded) return <div>Loading...</div>

    return(

        <div style={{ width: '80%', height: '80vh', margin: 'auto' }}>
        {/* <Autocomplete /> */}
            {/* get center to be the current users location */}
            {/* when a marker is created it needs to be tied to the create establishment form */}
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input 
                type="text"
                placeholder="Enter a location"
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
            center={{lat:34.5362, lng: -117.2928}}
            mapContainerStyle={{ width: '100%', height: '100%' }}
        >
        </GoogleMap>
        </div>
    )
}


export default Map;

// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng
// } from "use-places-autocomplete";
// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption
// } from "@reach/combobox";

    // const PlacesAutoComplete = ({ setSelected }) => {
    //     const {
    //         ready,
    //         value,
    //         setValue,
    //         suggestions: { status, data},
    //         clearSuggestions,
    //     } = usePlacesAutocomplete()
    //     return (
    //     <Combobox>
    //         <ComboboxInput value={value}/>
    //     </Combobox>
    //     )
    // }