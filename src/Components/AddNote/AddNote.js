import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router';

import './AddNote.css';
import {Add} from '../../store/actions/moveTo'

const AddNote=({Add})=>{

    const[label,setLabel] = useState('');
    const[text,setText] = useState('');
    const[color,setColor] = useState('#fff');
    const[option,setOption] = useState('textNote');
    const[checkboxText,setCheckBoxText]=useState('');
    const[checkboxes,setCheckBox] = useState([]);

    const history=useHistory();
 
    const saveNote=()=>{
        
        if(option==='textNote'){

            if(text==='' || label===''){
                alert('Enter All Information.');
                return;
            }
    
            let note={
                label,
                text,
                color,
                type:'text'
            }
    
            Add(note);
            history.push('/')


        }else if(option==='checkList'){

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

            Add(note);
            history.push('/')


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
            
            <h1 className='addnote-heading'>Add Note</h1>

            <h1 className='heading'>Options :</h1>

            <div className='note-type-div'>
                <div className='note-type-option' style={{backgroundColor: option==='textNote' ? '#6666661f' : null}} onClick={()=>{setOption('textNote')}}>Text Note</div>
                <div className='note-type-option' style={{backgroundColor: option==='checkList' ? '#6666661f' : null}} onClick={()=>{setOption('checkList')}}>Check List</div>
            </div>
            

            <h1 className='heading'>Label :</h1>

            <input className='note-text' placeholder='Write your label here...' style={{backgroundColor:color , minHeight:'fit-content'}} onChange={(e)=>setLabel(e.target.value)}></input>

            {
                option==='textNote' ?
                
                <div>
                    <h1 className='heading'>Text :</h1>
                    <textarea className='note-text' placeholder='Write your note here...' style={{backgroundColor:color}} onChange={(e)=>setText(e.target.value)}></textarea>
                </div>
                
                :

                <div>
                    <h1  className='heading'>CheckList :</h1>
                    <div  className='check-boxes-div' style={{backgroundColor:color}}>
                    {

                        checkboxes.length!==0 ?

                        checkboxes.map((element,i)=>{
                            return(
                                <div style={{textAlign:'left'}} className='check-box-input-div' key={i}>
                                <label htmlFor={i} style={{fontWeight:'bold',marginRight:'7px'}} onClick={()=>removeCheckbox(i)}>x</label>
                                <input type='checkbox' id={i} value='true' defaultChecked={element.checked ? true : false} onChange={(e)=>boxChecked(i)}></input>
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


            }


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
        Add : (note)=>{dispatch(Add(note))}
    }
}

export default connect(null,mapDispatchToProps)(AddNote)
