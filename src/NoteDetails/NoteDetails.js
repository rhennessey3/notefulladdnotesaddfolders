import React from 'react';
import STORE from '../dummy-store.js';
import './NoteDetails.css';

export default function NoteDetails(props){
    let note = (STORE.notes.find(note => note.id === props.match.params.noteId));

    return(<div className="note__details">
            <h3>{note.name}</h3>
            <p>Date Modified: {note.modified}</p>
            <p>{note.content}</p>
        </div>
    );
}