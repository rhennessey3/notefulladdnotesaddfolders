import React from 'react';
import PropTypes from 'prop-types';

import config from '../../config';

import '../Add.css';

export default class AddNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            noteName: "",
            noteContent: "",
            noteFolder: this.props.selectedFolder ? this.props.selectedFolder : this.props.allFolders[0].folder_id,
            touched: false,
        }
        this.textInput = React.createRef();

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
          .find(folder => folder.folder_name === e.target.value)
          .folder_id;

        console.log(folderId);

        this.setState({
            touched: true,
            noteFolder: folderId,
        })
    }

    handleInitialFolder(folder){
        this.setState({
            noteFolder: folder.folder_id,
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            touched: true,
        })
        fetch(config.NOTE_ENDPOINT, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                note_name: this.state.noteName,
                folder_id: this.state.noteFolder,
                content: this.state.noteContent,
            }),
       })
        .then(() => this.handleAddClick())
        .catch(error => console.log(error));
    }
    
    validateForm(){
        const noteName = this.state.noteName.trim();
        const noteContent = this.state.noteContent.trim();
        if(noteName.length === 0){
            return 'Please enter a name for your note.';
        }
        if(noteContent.length === 0){
            return 'Please enter content for your note.';
        }
    }

    componentDidMount(){
        this.textInput.current.focus();
    }

    render(){
        const hasNoteError = this.validateForm() ? true : false;

        //set first folder as selected by default, state handles initially setting it in response
        const firstFolder = this.props.selectedFolder 
            ? this.props.allFolders.find(folder => folder.folder_id == this.props.selectedFolder)
            : this.props.allFolders[0];


        const remainingFolderOptions = this.props.allFolders
            .filter(folder => folder.folder_id !== firstFolder.folder_id)
            .map(folder => 
                <option 
                 key={folder.folder_id} 
                 name="folder" 
                 id={folder.folder_id} 
                >
                  {folder.folder_name}
                </option>);
            
        return(
            <div className="popup__form">
                <form className="add__item" id="addNote" onSubmit={e => this.handleSubmit(e)}>

                    <label htmlFor="noteName">Note Name*: 
                        <input 
                          type="text" 
                          name="noteName" 
                          id="noteName" 
                          aria-required="true"
                          onChange={e => this.handleNoteName(e)}
                          ref={this.textInput}
                        />
                    </label>
                    
                    <label htmlFor="noteContent">Content*: 
                        <textarea name="noteContent" 
                          id="noteContents" 
                          aria-required="true"
                          onChange={e => this.handleNoteContent(e)} />
                    </label>

                    <label htmlFor="folders">Folder: 
                        <select name="folders" onChange={e => this.handleNoteFolder(e)}>
                            <option 
                              key={firstFolder.folder_id} 
                              name="folder" 
                              id={firstFolder.folder_id} 
                             >
                                {firstFolder.folder_name}
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

AddNote.propTypes = {
    allFolders: PropTypes.array.isRequired,
    folderId: PropTypes.string,
};