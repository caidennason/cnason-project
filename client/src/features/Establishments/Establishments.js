import React, {useEffect, useState} from 'react';
import EstablishmentForm from './EstablishmentForm';
import EstablishmentCard from './EstablishmentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstablishments } from './establishmentsSlice'

function Establishments() {
    const establishments = useSelector((state) => state.establishments.entities);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchEstablishments());
    }, [dispatch]);
  
    return (
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Establishments</h1>
        <EstablishmentForm />
        {establishments.map((e) => (
          <EstablishmentCard key={e.id} e={e} photo={e.photo} />
        ))}
        
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