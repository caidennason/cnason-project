import React, {useEffect, useState} from 'react';
import EstablishmentForm from './EstablishmentForm';
import EstablishmentCard from './EstablishmentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstablishments } from './establishmentsSlice'
import { Grid } from '@mui/material';

function Establishments() {
    const establishments = useSelector((state) => state.establishments.entities);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser)
    console.log(currentUser, 'hello ')
  
    useEffect(() => {
      dispatch(fetchEstablishments());
    }, [dispatch]);
  
    return (
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Establishments</h1>
        <EstablishmentForm />
        <Grid container spacing={2} sx={{padding: '16px', paddingBottom: '16px'}}>
        {establishments.map((e) => (
          <Grid item key={e.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <EstablishmentCard e={e} photo={e.photo} />
          </Grid>
        ))}
      </Grid> 
      </div>
    );
  }
  
  export default Establishments;

            //     <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            //     <ArrowBackIcon />
            //   </Button>
            //   <Button
            //     onClick={handleNextPage}
            //     disabled={endIndex >= e.length}
            //   >
            //     <ArrowForwardIcon />
            //   </Button>