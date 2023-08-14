import React, {useState} from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import {SearchIcon} from '@mui/icons-material/Search'

function SearchBar({establishments, onSearch}){

    const [search, setSearch] = useState('')

    // const listedEstablishments = establishments.filter((est) => est.)
    console.log(establishments.filter((est) => est.name.toLowerCase().includes(search.toLowerCase())))

    const handleSearchBar = (e) => {
    const filteredEstablishments = establishments.filter((est) => est.name.toLowerCase().includes(search.toLowerCase()))
    onSearch(filteredEstablishments)
    setSearch(e.target.value)
    console.log(search)
    }

    return(
    <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <TextField onChange={handleSearchBar} id="outlined-basid" label="search establishments" variant="outlined" />
    </Box>
    )
}

export default SearchBar;