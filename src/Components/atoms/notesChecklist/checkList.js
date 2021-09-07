import React from 'react';
import { connect } from 'react-redux';

import './checkList.css';
import Notes from '../../../Assets/notes.png'
import Archive from '../../../Assets/archive.png'
import Trash from '../../../Assets/trash.png'
import Edit from '../../../Assets/edit.png'
import { moveTo , checkboxUpdate } from '../../../store/actions/moveTo';

const notesText=({type,details,editNote,moveTo,index,checkboxUpdate})=>{


    const move=(to)=>{

        if(to===type && type==='trash'){
            if(!window.confirm('This will be deleted permanently.')){
                return
            }
        }

        moveTo(to,type,details)

    }

    const boxChecked=(i)=>{
        
        details.checkboxes[i].checked= !details.checkboxes[i].checked;
        let note={
            label:details.label,
            checkboxes:details.checkboxes,
            type:details.type
        }
        checkboxUpdate(note,type,index);

    }

    return (
            <div className='note' style={{backgroundColor:details.color}}>

                <h3 className='notes-text' style={{fontWeight:'bold'}}>{details.label}</h3>
                <div style={{marginTop:'5px'}}>
                {
                        details.checkboxes.map((element,i)=>{
                            return(
                                <div style={{textAlign:'left'}} className='checkbox' key={i}>
                                <input type='checkbox' id={i} defaultChecked={element.checked ? true : false} onChange={()=>boxChecked(i)}></input>
                                <label htmlFor={i} style={{color:'#666',marginLeft:'5px',fontWeight:'500'}}>{element.text}</label>
                                </div>
                            )
                            
                        })
                    
                }
                </div>

                <div className='notes-option-div'>
                    {
                        type === 'notes' ? 
                        
                        <div>
                            <img src={Archive} className='notes-option' alt='Move to Archive' title='Move to Archive' onClick={()=>move('archive')}></img>
                            <img src={Trash} className='notes-option' alt='Move to Trash' title='Move to Trash' onClick={()=>move('trash')}></img>
                            <img src={Edit} className='notes-option' alt='Edit' title='Edit' onClick={editNote}></img>
                        </div>

                        : type === 'archive' ?
                        
                        <div>
                            <img src={Notes} className='notes-option' alt='Move to Notes' title='Move to Notes' onClick={()=>move('notes')}></img> 
                            <img src={Trash} className='notes-option' alt='Move to Trash' title='Move to Trash' onClick={()=>move('trash')}></img>
                            <img src={Edit} className='notes-option' alt='Edit' title='Edit' onClick={editNote}></img>
                        </div>
                        
                        :
                        
                        <div>
                            <img src={Notes} className='notes-option' alt='Move to Notes' title='Move to Notes' onClick={()=>move('notes')}></img>
                            <img src={Archive} className='notes-option' alt='Move to Archive' title='Move to Archive' onClick={()=>move('archive')}></img>
                            <img src={Trash} className='notes-option' alt='Move to Trash' title='Move to Trash' onClick={()=>move('trash')}></img>
                            <img src={Edit} className='notes-option' alt='Edit' title='Edit' onClick={editNote}></img>
                        </div>
                   
                    }
                    
                </div>
            
            </div>
    )
}


const mapDispatchToProp=(dispatch)=>{
    return{
        moveTo:(to,from,note)=>{dispatch(moveTo(to,from,note))},
        checkboxUpdate:(note,type,index)=>{dispatch(checkboxUpdate(note,type,index))}
    }
}



export default connect(null,mapDispatchToProp)(notesText)
