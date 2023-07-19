import React, {useEffect} from 'react';
import EstablishmentForm from './EstablishmentForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstablishments } from './establishmentsSlice'

function Establishments(){

    const establishments = useSelector((state) => state.entities)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchEstablishments())
    // }, [])

    console.log(establishments)

    return(
        <div>
            <br></br>
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Establishments</h1>
            <EstablishmentForm />
        </div>
    )
}

export default Establishments;