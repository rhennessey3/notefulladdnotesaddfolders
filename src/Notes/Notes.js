import React from 'react';
import STORE from '../dummy-store.js';
import { NavLink } from 'react-router-dom';
import NoteDetails from '../NoteDetails/NoteDetails';

export default function Notes(props){
    const folderSelected = props.match.params.folderId;
    let notes = (folderSelected
            ? STORE.notes.filter(note => note.folderId === folderSelected)
            : STORE.notes)
                .map(note => (<div className="note__overview" key={note.id}>
                    <NavLink to={`/note/${note.id}`}>
                        <h3>{note.name}</h3>
                    </NavLink>
                    <p>Date Modified: {note.modified}</p>
                </div>));

        return(
            <div className="notes__list">
                {notes}
            </div>
        );
    }