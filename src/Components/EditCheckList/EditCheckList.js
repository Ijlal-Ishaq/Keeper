import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router';

import './EditCheckList.css';
import {Edit} from '../../store/actions/moveTo'

const EditCheckList=({Edit})=>{

    const history=useHistory();
    const type=history.location.props.type;
    const index=history.location.props.index;
    const note=history.location.props.note;

    const[label,setLabel] = useState(note.label);
    const[color,setColor] = useState(note.color);
    const[checkboxText,setCheckBoxText]=useState('');
    const[checkboxes,setCheckBox] = useState([...note.checkboxes]);

    
 
    const saveNote=()=>{
        

            if(label==='' || checkboxes.length===0){
                alert('Enter All Information.');
                return;
            }

            let note={
                label,
                checkboxes,
                color,
                type:'checklist'
            }

            Edit(note,type,index);
            if(type==='notes'){
                history.push('/')
            }else{
                history.push('/'+type)
            }


    }

    const addToCheckList=()=>{

        if(checkboxText!==''){

            let checkbox={
                text: checkboxText,
                checked: false
            }

            setCheckBox([...checkboxes,checkbox]);
            setCheckBoxText('')

        }

    }

    const removeCheckbox=(i)=>{

        let newcheckboxes=[...checkboxes];
        newcheckboxes.splice(i,1)

        setCheckBox(
            newcheckboxes
        )
    }

    const boxChecked=(i)=>{
        
        checkboxes[i].checked= !checkboxes[i].checked;

    }


    return (
        <div className='add-note-div'>
            
            <h1 className='addnote-heading'>Edit Note</h1>

            <h1 className='heading'>Label :</h1>

            <input className='note-text' placeholder='Write your label here...' style={{backgroundColor:color , minHeight:'fit-content'}} onChange={(e)=>setLabel(e.target.value)} value={label}></input>


            <div>
                <h1  className='heading'>CheckList :</h1>
                <div  className='check-boxes-div' style={{backgroundColor:color}}>
                {

                    checkboxes.length!==0 ?

                    checkboxes.map((element,i)=>{
                        return(
                            <div style={{textAlign:'left'}} className='check-box-input-div' key={i}>
                            <label htmlFor={i} style={{fontWeight:'bold',marginRight:'7px'}} onClick={()=>removeCheckbox(i)}>x</label>
                            <input type='checkbox' id={i} value='true' defaultChecked={element.checked ? true : false} onChange={()=>boxChecked(i)}></input>
                            <label htmlFor={i}>{element.text}</label>
                            </div>
                        )
                        
                    }) : 

                    <div style={{color:'#666'}}>No Items</div>


                }
                </div>
                <input className='note-text' style={{fontSize:'small' , minHeight:'fit-content', minWidth:'fit-content'}} placeholder='Text for Checkbox...' onChange={(e)=>setCheckBoxText(e.target.value)} value={checkboxText}></input>
                <button className='save-btn' style={{fontSize:'small' ,padding:'9px'}} onClick={addToCheckList}>Create</button>

            </div>



            <h1 className='heading'>Color :</h1>

            
            <div className='color-selection'>
                <div className='color-option' onClick={()=>setColor('#a8e6cf')} style={{backgroundColor:'#a8e6cf'}}></div>
                <div className='color-option' onClick={()=>setColor('#dcedc1')} style={{backgroundColor:'#dcedc1'}}></div>
                <div className='color-option' onClick={()=>setColor('#ffd3b6')} style={{backgroundColor:'#ffd3b6'}}></div>
                <div className='color-option' onClick={()=>setColor('#ffaaa5')} style={{backgroundColor:'#ffaaa5'}}></div>
                <div className='color-option' onClick={()=>setColor('#ff8b94')} style={{backgroundColor:'#ff8b94'}}></div>
            </div>

            <button className='save-btn' onClick={saveNote}>Save</button><br/><br/><br/>
        
        </div>
    )
}



const mapDispatchToProps=(dispatch)=>{
    return{
        Edit : (note,type,index)=>{dispatch(Edit(note,type,index))}
    }
}

export default connect(null,mapDispatchToProps)(EditCheckList)
