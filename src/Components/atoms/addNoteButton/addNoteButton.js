import React from 'react';
import { Link } from 'react-router-dom';

import './addNoteButton.css';


const addNoteButton=()=>{
    return (
        <Link to={'/add-note'}>
            <div className='add-fab'></div>
        </Link>
    )
}

export default addNoteButton
