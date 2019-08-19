import React from 'react';

import config from '../../config';

import '../Add.css';

export default class AddNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            noteName: "",
            noteContent: "",
            noteFolder: this.props.selectedFolder ? this.props.selectedFolder : this.props.allFolders[0].id,
            touched: false,
        }
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNoteName = this.handleNoteName.bind(this);
        this.handleNoteContent = this.handleNoteContent.bind(this);
        this.handleNoteFolder = this.handleNoteFolder.bind(this);
    }

    handleAddClick(){
        this.props.addClickHandler();
        this.props.addNoteHandler();
    }

    handleNoteName(e){
        this.setState({
            touched: true,
            noteName: e.target.value,
        })
    }

    handleNoteContent(e){
        this.setState({
            touched: true,
            noteContent: e.target.value,
        })
    }

    handleNoteFolder(e){
        let folderId = this.props.allFolders
          .find(folder => folder.name === e.target.value)
          .id;
        this.setState({
            touched: true,
            noteFolder: folderId,
        })
        console.log(this.state.noteFolder);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            touched: true,
        })
        fetch(config.NOTE_ENDPOINT, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                {name: this.state.noteName,
                folderId: this.state.noteFolder,
                content: this.state.noteContent,
                modified: new Date(),
                }),
       })
        .then(() => this.handleAddClick())
        .catch(error => console.log(error));
    }
    
    validateForm(){
        const noteName = this.state.noteName.trim();
        if(noteName.length === 0){
            return 'Please enter a name for your note.';
        }
    }

    render(){
        const hasNoteError = this.validateForm() ? true : false;

        const firstFolder = this.props.selectedFolder 
            ? this.props.allFolders.find(folder => folder.id === this.props.selectedFolder)
            : this.props.allFolders[0];
        const remainingFolderOptions = this.props.allFolders
            .filter(folder => folder.id !== firstFolder.id)
            .map(folder => 
                <option 
                 key={folder.id} 
                 name="folder" 
                 id={folder.id} 
                >
                  {folder.name}
                </option>);
    
        return(
            <div className="popup__form">
                <form className="add__item" id="addNote" onSubmit={e => this.handleSubmit(e)}>

                    <label htmlFor="noteName">Note Name*: 
                        <input type="text" name="noteName" id="noteName" onChange={e => this.handleNoteName(e)}/>
                    </label>
                    
                    <label htmlFor="noteContent">Content: 
                        <textarea name="noteContent" id="noteContents" onClick={e => this.handleNoteContent(e)} />
                    </label>

                    <label htmlFor="folders">Folder: 
                        <select name="folders" onClick={e => this.handleNoteFolder(e)}>
                            <option 
                              key={firstFolder.id} 
                              name="folder" 
                              id={firstFolder.id} 
                             >
                                {firstFolder.name}
                            </option>
                            {remainingFolderOptions}
                        </select>
                    </label>

                    <div className="buttons">
                        <button type="submit" disabled={hasNoteError}>Add Note</button>
                        <button>Cancel</button>
                    </div>

                    <p>* required field</p>

                </form>
            </div>
        )
    }
}