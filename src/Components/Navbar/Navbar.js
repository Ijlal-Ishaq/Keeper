import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import Archive from '../../Assets/archive.png';
import Trash from '../../Assets/trash.png';
import Notes from '../../Assets/notes.png';
import Icon from '../../Assets/icon.png';

const Navbar=()=>{
    
    const navRef = useRef();
    let count=0;

    useEffect(()=>{
    
        const page=window.location.href.split('/')[3];
    
        if(page===''){
            navRef.current.children[0].children[0].focus()
        }else if(page==='archive'){
            navRef.current.children[1].children[0].focus()
        }else if(page==='trash'){
            navRef.current.children[2].children[0].focus()
        }

    })

   
    const expend_nav=()=>{
   
        window.scrollTo(0,0)
   
        if(count%2===0){
            navRef.current.style.display='block'
        }else{
            navRef.current.style.display='none'
        }
   
        count++;
   
    }



    return (
        <div className='nav-div'>

            <Link to={'/'} style={{textDecoration:'none'}}>
                <div className='nav-header'>
                    <img src={Icon} className='nav-icon' alt='Keeper'></img>
                    <span className='nav-icon-name'>Keeper</span>
                </div>
            </Link>

            <div className='nav-items-div' ref={navRef}>

                <Link to={'/'} style={{textDecoration: 'none'}} > 
                    <div className='nav-items' tabIndex="1">
                        <img src={Notes} className='nav-items-img' alt='Notes'></img>
                        <span className='nav-item-name'>Notes</span>
                    </div>
                </Link>
                
                <Link to={'/archive'} style={{textDecoration: 'none'}}> 
                    <div className='nav-items' tabIndex="1" >
                        <img src={Archive} className='nav-items-img' alt='Archive'></img>
                        <span className='nav-item-name'>Archive</span>
                    </div>
                </Link>

                <Link to={'/trash'} style={{textDecoration: 'none'}}> 
                    <div className='nav-items' tabIndex="1" >
                        <img src={Trash} className='nav-items-img' alt='Trash'></img>
                        <span className='nav-item-name'>Trash</span>
                    </div>
                </Link>

            </div>


            <button className='expand-nav' onClick={expend_nav} ></button>

        </div>
    )
}

export default Navbar