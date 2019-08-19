import React from 'react';

import './NoteDetails.css';

export default class NoteDetails extends React.Component{
    render(){
        const note = (this.props.notes
            .find(note => note.id === this.props.noteId));
            
        return(
            <div className="note__details">
                <h3>{note.name}</h3>
                <p>Date Modified: {note.modified}</p>
                <p>{note.content}</p>
            </div>
        );
    }
}