import React from 'react'
import { useSelector, UseDispatch } from 'react-redux/es/hooks/useSelector';

function Comment(){

    const comment = useSelector((state) => state.comments)

    return(
        <>
        </>
    )
}

export default Comment;