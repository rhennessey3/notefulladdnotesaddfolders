import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notes.css';

export default class Notes extends React.Component{
    render(){
        const notes = (this.props.folderId
            ? this.props.notes.filter(note => note.folderId === this.props.folderId)
            : this.props.notes)
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
}