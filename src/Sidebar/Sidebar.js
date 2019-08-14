import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.clickHandler(e.target.id);
    }

    render(){
        let folderDisplay = this.props.folders
            .map(folder => 
                <NavLink 
                    key={folder.id} 
                    id={folder.id}
                    onClick={this.handleClick}                        
                    to={`/folder/${folder.id}`}>
                        {folder.name}
                        
                </NavLink>);
            
        return(
            <div className="sidebar">
                {folderDisplay}
            </div>
        );
    }
}