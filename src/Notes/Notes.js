import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notes.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                    <h4><FontAwesomeIcon icon={faTrashAlt} />Delete Note</h4>
                </div>));

        return(
            <div className="note__container">
                <div className="note__list">
                    {notes}
                </div>
                <h3 className="add__note"><FontAwesomeIcon icon={faPlusSquare} />Add Note</h3>
            </div>
        );
    }
}