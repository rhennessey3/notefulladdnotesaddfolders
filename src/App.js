import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import NoteDetails from './NoteDetails/NoteDetails';
import SidebarNoteDetails from './SidebarNoteDetails/SidebarNoteDetails';
import AddFolder from './Add/AddFolder/AddFolder';
import AddNote from './Add/AddNote/AddNote';
import NoteDisplayError from './NoteDisplayError/NoteDisplayError';
import FolderDisplayError from './FolderDisplayError/FolderDisplayError';

import './App.css';
import config from './config';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFolder: '',
      selectedNote: '',
      allFolders: [],
      allNotes: [],
      error: '',
      showAddFolder: false,
      showAddNote: false,
    }
  }

  setSelected(selected){
    this.setState({
      selectedFolder: selected
    });
  }

  setNotes(notes){
    this.setState({
      allNotes: notes
    })
  }

  setFolders(folders){
    this.setState({
      allFolders: folders
    })
  }

  setError(error){
    this.setState({
      error: error
    })
  }

  setFolderAdd(){
    const toggle = this.state.showAddFolder ? false : true;
    this.setState({
      showAddFolder: toggle
    })
  }

  setNoteAdd(){
    const toggle = this.state.showAddNote ? false : true;
    this.setState({
      showAddNote: toggle
    })
  }

  componentDidMount() {
    Promise.all([
        fetch(`${config.NOTE_ENDPOINT}`),
        fetch(`${config.FOLDER_ENDPOINT}`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setNotes(notes);
            this.setFolders(folders);
        })
        .catch(error => {
            this.setError(error);
        });
    }

  render(){
    return (
    <div className="App">
      <Header />
      <main>
        <Route exact path ="/" 
               render={ () => 
               <Sidebar 
                  folders={this.state.allFolders} 
                  folderClickHandler={selected => this.setSelected(selected)}
                  addClickHandler={() => this.setFolderAdd()}
                />} 
        />
        <Route path ="/folder" 
               render={ () =>
               <Sidebar 
                  folders={this.state.allFolders} 
                  folderClickHandler={selected => this.setSelected(selected)}
                  addClickHandler={() => this.setFolderAdd()}
                />} 
        />
        <Route path ="/note/:noteId" 
               render={ (routerProps) => 
               <FolderDisplayError>
                  <SidebarNoteDetails 
                      notes={this.state.allNotes} 
                      folders={this.state.allFolders}
                      noteId={routerProps.match.params.noteId}
                      folderId={this.state.selectedFolder}
                    />
                </FolderDisplayError>
                } 
        />
        <Route exact path="/" 
               render={ (routerProps) =>
               <Notes 
                  notes={this.state.allNotes}
                  folderId={routerProps.match.params.folderId}
                  deleteHandler={notes => this.setNotes(notes)}
                  addNoteHandler={() => this.setNoteAdd()}
                />}
        />
        <Route path="/folder/:folderId" 
               render={ (routerProps) =>
               <Notes 
                  notes={this.state.allNotes}
                  folderId={routerProps.match.params.folderId}
                  deleteHandler={notes => this.setNotes(notes)}
                  addNoteHandler={() => this.setNoteAdd()}
                />}
        />
        <Route path="/note/:noteId" 
               render={(routerProps) => 
                <NoteDisplayError>
                  <NoteDetails 
                      notes={this.state.allNotes}
                      noteId={routerProps.match.params.noteId}
                      deleteHandler={notes => this.setNotes(notes)}
                    />
                </NoteDisplayError>
                } 
        />
        {this.state.showAddFolder
          ? <AddFolder 
             addClickHandler={() => this.setFolderAdd()}
            /> 
          : ''}

        {this.state.showAddNote
         ? <AddNote
            addNoteHandler={() => this.setNoteAdd()}
            allFolders={this.state.allFolders}
            selectedFolder={this.state.selectedFolder}
           />
         : ''}

      </main>
    </div>
    );
  }
}

export default App;