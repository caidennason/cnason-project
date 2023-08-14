import React, {useEffect, useState} from 'react';
import EstablishmentForm from './EstablishmentForm';
import EstablishmentCard from './EstablishmentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstablishments } from './establishmentsSlice'
import { Grid } from '@mui/material';
import SearchBar from './SearchBar';

function Establishments() {
    const establishments = useSelector((state) => state.establishments.entities);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser)
    console.log(currentUser, 'hello ')
    const [filteredEstablishments, setFilteredEstablishments] = useState(establishments)

    // // const listedEstablishments = establishments.filter((est) => est.)

    // console.log(establishments.filter((est) => est.name == search))

    // const handleSearchBar = (e) => {
    //   setSearch(e.target.value)
    //   console.log(search)
    // }

    
  
    useEffect(() => {
      dispatch(fetchEstablishments());
    }, [dispatch]);
  
    return (
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Search Establishments</h1>
        <SearchBar establishments={establishments} onSearch={setFilteredEstablishments} />
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Submit Establishment</h1>
        <EstablishmentForm />
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  Establishments</h1>
        <Grid container spacing={2} sx={{padding: '16px', paddingBottom: '16px'}}>
        {filteredEstablishments.map((e) => (
          <Grid item key={e.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <EstablishmentCard e={e} photo={e.photo} />
          </Grid>
        ))}
      </Grid> 
      </div>
    );
  }
  
  export default Establishments;

