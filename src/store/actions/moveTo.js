export const Add = (note) =>{

    return{
        type : 'Add',
        note,
    }

}

export const Edit = (note,type,index) =>{

    return{
        type : 'Edit',
        note,
        noteType:type,
        index,
    }

}


export const moveTo = (to,from,note) =>{

    return{
        type : 'MOVE_TO',
        to,
        from,
        note,
    }

}



export const checkboxUpdate = (note,type,index) =>{

    return{
        type : 'CHECKBOX_UPDATE',
        note,
        noteType:type,
        index,
    }

}

