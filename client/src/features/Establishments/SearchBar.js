import React, {useState} from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import {SearchIcon} from '@mui/icons-material/Search'

function SearchBar({establishments, onSearch}){

    const [search, setSearch] = useState('')

    // const handleSearchBar = (e) => {
    // setSearch(e.target.value)
    // const filteredEstablishments = establishments.filter((est) => est.name.toLowerCase().includes(search.toLowerCase()))
    // onSearch(filteredEstablishments)
    // }

    const handleSearchBar = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        const filteredEstablishments = establishments.filter((est) =>
          est.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        onSearch(filteredEstablishments);
      };
      

    return(
    <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <TextField onChange={handleSearchBar} id="outlined-basid" label="search establishments" variant="outlined" />
    </Box>
    )
}

export default SearchBar;