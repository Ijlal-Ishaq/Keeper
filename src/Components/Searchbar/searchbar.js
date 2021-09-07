import React from 'react';
import './searchbar.css'

const searchbar=({setQuery})=>{
    return (
        <div className='searchbar-div'>
            <input className='searchbar' placeholder='Search...' onChange={(e)=>setQuery(e.target.value)}></input>
        </div>
    )
}

export default searchbar
