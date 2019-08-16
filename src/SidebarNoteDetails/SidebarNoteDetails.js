import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNoteDetails.css';
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SidebarNoteDetails extends React.Component{
    render(){
        
        const folderId = this.props.notes.find(note => note.id === this.props.noteId).folderId;
        const folderName = this.props.folders.find(folder => folder.id === folderId).name;

        return(
            <div className="sidebar">
                <p><FontAwesomeIcon icon={faFolderOpen} />{folderName}</p>
                <NavLink id="back__link" to="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} />Go Back</NavLink>
            </div>
        )
    }
}