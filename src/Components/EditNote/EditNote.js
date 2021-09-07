import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router';

import './EditNote.css';
import {Edit} from '../../store/actions/moveTo'

const EditNote=({Edit})=>{


    const history=useHistory();
    const type=history.location.props.type;
    const index=history.location.props.index;
    const note=history.location.props.note;

    
    const[label,setLabel] = useState(note.label);
    const[text,setText] = useState(note.text);
    const[color,setColor] = useState(note.color);

 
    const saveNote=()=>{
        
        if(text===''){
            alert('Enter Some text.');
            return;
        }

        let note={
            label,
            text,
            color,
            type:'text'
        }

        Edit(note,type,index);
        if(type==='notes'){
            history.push('/')
        }else{
            history.push('/'+type)
        }

    }

    return (
        <div className='add-note-div'>
            
            <h1 className='addnote-heading'>Edit Note</h1>

            <input className='note-text' placeholder='Write your label here...' value={label} style={{backgroundColor:color , minHeight:'fit-content'}} onChange={(e)=>setLabel(e.target.value)}></input>

            <textarea className='note-text' placeholder='Write your note here...' value={text} style={{backgroundColor:color}} onChange={(e)=>setText(e.target.value)}></textarea>
            
            <div className='color-selection'>
                <div className='color-option' onClick={()=>setColor('#a8e6cf')} style={{backgroundColor:'#a8e6cf'}}></div>
                <div className='color-option' onClick={()=>setColor('#dcedc1')} style={{backgroundColor:'#dcedc1'}}></div>
                <div className='color-option' onClick={()=>setColor('#ffd3b6')} style={{backgroundColor:'#ffd3b6'}}></div>
                <div className='color-option' onClick={()=>setColor('#ffaaa5')} style={{backgroundColor:'#ffaaa5'}}></div>
                <div className='color-option' onClick={()=>setColor('#ff8b94')} style={{backgroundColor:'#ff8b94'}}></div>
            </div>

            <button className='save-btn' onClick={saveNote}>Save</button>
        
        </div>
    )
}



const mapDispatchToProps=(dispatch)=>{
    return{
        Edit : (note,type,index)=>{dispatch(Edit(note,type,index))}
    }
}

export default connect(null,mapDispatchToProps)(EditNote)
