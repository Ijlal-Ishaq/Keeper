import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';

import './mainBody.css';
import NotesText from '../atoms/notesText/notesText';
import CheckList from '../atoms/notesChecklist/checkList';
import SearchBar from '../Searchbar/searchbar';

const Mainbody=({type,notes})=>{
    
    const [searchQuery,setQuery]= useState('');
    const history = useHistory();

    const queryFilter=(note)=>{

        if(note.type==='text'){
            return(note.text.toLowerCase().includes(searchQuery.toLowerCase())||note.label.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        else{

            let flag=false;

            if(note.label.toLowerCase().includes(searchQuery.toLowerCase())) flag=true;
            note.checkboxes.map(element=>{
                if(element.text.toLowerCase().includes(searchQuery.toLowerCase())){
                    flag=true;
                }
                return true
            });

            return flag;
        }
   
    }

    const editNote=(note,i)=>{

        let index=0;

        if(searchQuery===''){
            index=i
        }else{
            
            notes.forEach((element,i) => {
                if(JSON.stringify(element)===JSON.stringify(note)){
                    index=i;
                }
            });

        }
        
        if(note.type==='text'){
          
            history.push({
                pathname: '/edit-note',
                props: { type,index,note }
            })

        }else if(note.type==='checklist'){
           
            history.push({
                pathname: '/edit-checklist',
                props: { type,index,note }
            })

        }

        



    }

    const getIndex=(i,note)=>{

        let index=0;

        if(searchQuery===''){
            index=i
        }else{
            
            notes.forEach((element,i) => {
                if(JSON.stringify(element)===JSON.stringify(note)){
                    index=i;
                }
            });

        }

        return index;




    }

    return (
        <div className='mainbody'>
        
        <SearchBar setQuery={setQuery}/>
              
                <h1 className='mainbody-heading'>{type==='notes' ? 'Notes' : type==='archive' ? 'Archive' : type==='trash' ? 'Trash' : ''}</h1>
        
                {
                    notes.filter(queryFilter).map((note,index)=>{
                        return(
                            note.type==='text' ?
                            <NotesText type={type} details={note} editNote={()=>editNote(note,index)} key={index}/>
                            :
                            <CheckList type={type} details={note} editNote={()=>editNote(note,index)} key={index} index={()=>getIndex(index,note)}/>
                        )
                    })
                }
                
                {
                    notes.filter(queryFilter).length===0 ? <h1 className='mainbody-heading no-notes'>No Notes!</h1> : null
                }

        </div>
    )
}

const mapStateToProp=(state,ownProps)=>{
    return{
        notes: ownProps.type==='notes' ? state.notes : ownProps.type==='archive' ? state.archiveNotes : state.trashNotes
        
    }
}


export default connect(mapStateToProp)(Mainbody)
