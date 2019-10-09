import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Sidebar.css';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.handleFolderClick = this.handleFolderClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleFolderClick(e){
        this.props.folderClickHandler(e.target.id);
    }

    handleAddClick(){
        this.props.addClickHandler();
    }

    render(){
        let folderDisplay = this.props.folders
            .map(folder => 
                <NavLink 
                    key={folder.folder_id} 
                    id={folder.folder_id}
                    onClick={this.handleFolderClick} 
                    aria-label="folder"                       
                    to={`/folders/${folder.folder_id}`}>
                        <FontAwesomeIcon icon={faFolderOpen}/>
                        {folder.folder_name}
                </NavLink>);
          return(
            <div className="sidebar">
                {folderDisplay}
                <button onClick={this.handleAddClick}>
                    <FontAwesomeIcon icon={faFolderPlus}/>
                    Add Folder
                </button>
            </div>
        );
    }
}

Sidebar.propTypes = {
    folders: PropTypes.array
};