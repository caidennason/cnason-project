import React, {useEffect} from 'react';
import EstablishmentForm from './EstablishmentForm';
import EstablishmentCard from './EstablishmentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstablishments } from './establishmentsSlice'

function Establishments(){

    const establishments = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEstablishments())
    }, [dispatch])

    console.log(establishments.establishments.entities, 'check')
    const allEstablishments = establishments.establishments.entities
    console.log(allEstablishments)

    

    return(
        <div>
            <br></br>
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Establishments</h1>
            <EstablishmentForm />
            {allEstablishments.map((e) => {
                return <EstablishmentCard e={e} photo={e.photo}/>
            })}
        </div>
    )
}

export default Establishments;