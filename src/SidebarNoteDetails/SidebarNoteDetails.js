import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNoteDetails.css';

export default class SidebarNoteDetails extends React.Component{
    render(){
        const folderId = this.props.notes.find(note => note.id === this.props.noteId).folderId;
        const folderName = this.props.folders.find(folder => folder.id === folderId).name;

        return(
            <div className="sidebar">
                <NavLink to="/">Go Back</NavLink>
                <p>{folderName}</p>
            </div>
        )
    }
}