const initialState={
    notes: [],
    archiveNotes: [],
    trashNotes: [],
}

const reducer = (state=initialState,action) =>{


    if(action.type==='Add'){

        return{
            ...state,
            notes:[...state.notes,action.note]
        }

    }


    if(action.type==='Edit'){

        

        if(action.noteType==='notes'){

            let notesCopy=[...state.notes];
            notesCopy[action.index]=action.note;
            return{
                ...state,
                notes:notesCopy
            }

        } else if(action.noteType==='archive'){

            let archiveNotesCopy=[...state.archiveNotes];
            archiveNotesCopy[action.index]=action.note;
            return{
                ...state,
                archiveNotes:archiveNotesCopy
            }

        } else if(action.noteType==='trash'){

            let trashNotesCopy=[...state.trashNotes];
            trashNotesCopy[action.index]=action.note
            return{
                ...state,
                trashNotes:trashNotesCopy
            }

        }



    }


    if(action.type==='MOVE_TO'){

        let notesCopy=[...state.notes];
        let archiveNotesCopy=[...state.archiveNotes];
        let trashNotesCopy=[...state.trashNotes];


        if(action.to==='notes'){
            notesCopy=[...notesCopy,action.note];
        }else if(action.to==='archive'){
            archiveNotesCopy=[...archiveNotesCopy,action.note];
        }else if((action.to==='trash')){
            trashNotesCopy=[...trashNotesCopy,action.note];
        }

        if(action.from==='notes'){
            notesCopy=state.notes.filter(note=>JSON.stringify(note)!==JSON.stringify(action.note))
        }else if(action.from==='archive'){
            archiveNotesCopy=state.archiveNotes.filter(note=>JSON.stringify(note)!==JSON.stringify(action.note))
        }else if(action.from==='trash'){
            trashNotesCopy=state.trashNotes.filter(note=>JSON.stringify(note)!==JSON.stringify(action.note))
        }


        return{
            ...state,
            notes:notesCopy,
            archiveNotes:archiveNotesCopy,
            trashNotes:trashNotesCopy,
        }


    }


    if(action.type==='CHECKBOX_UPDATE'){

        if(action.noteType==='notes'){

            let notesCopy=[...state.notes];
            notesCopy[action.index]=action.note;
            return{
                ...state,
                notes:notesCopy
            }

        } else if(action.noteType==='archive'){

            let archiveNotesCopy=[...state.archiveNotes];
            archiveNotesCopy[action.index]=action.note;
            return{
                ...state,
                archiveNotes:archiveNotesCopy
            }

        } else if(action.noteType==='trash'){

            let trashNotesCopy=[...state.trashNotes];
            trashNotesCopy[action.index]=action.note
            return{
                ...state,
                trashNotes:trashNotesCopy
            }

        }
  
    }
    
    return state;

}

export default reducer