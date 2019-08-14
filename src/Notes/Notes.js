import React from 'react';
import STORE from '../dummy-store.js';

export default function Notes(props){
    const folderSelected = props.match.params.folderId;
    let notes = (folderSelected
            ? STORE.notes.filter(note => note.folderId === folderSelected)
            : STORE.notes)
                .map(note => (<div className="note" key={note.id}>
                    <h3>{note.name}</h3>
                    <p>{note.modified}</p>
                </div>));

        return(
            <div className="notes">
                {notes}
            </div>
        );
    }