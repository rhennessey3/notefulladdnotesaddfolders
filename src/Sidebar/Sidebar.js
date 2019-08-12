import React from 'react';

export default class Folders extends React.Component{
    render(){
        const allFolders = this.props.folders.map(folder => (
            <li key={folder.id}>
                <a href={`/folder/${folder.id}`}>{folder.name}</a>
            </li>
        ));
        return(
            <ul>
                {allFolders}
            </ul>
        );
    }
}