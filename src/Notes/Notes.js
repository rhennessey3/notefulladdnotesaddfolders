import React from 'react';
import STORE from '../dummy-store.js';

export default class Notes extends React.Component{
    
    render(){
        let notes = (this.props.selected !== ''
            ? STORE.notes.filter(note => note.folderId === this.props.selected)
            : STORE.notes)
                .map(note => ( <li key={note.id}>{note.name}</li> ));


        


        return(
            <ul>
                {notes}
            </ul>
        );
    }
}