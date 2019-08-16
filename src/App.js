import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import NoteDetails from './NoteDetails/NoteDetails';
import SidebarNoteDetails from './SidebarNoteDetails/SidebarNoteDetails';
import { Route } from 'react-router-dom';
import './App.css';
import config from './config';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFolder: '',
      selectedNote: '',
      allFolders: STORE.folders,
      allNotes: STORE.notes,
      error: '',
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
                  clickHandler={selected => this.setSelected(selected)}
                />} 
        />
        <Route path ="/folder" 
               render={ () =>
               <Sidebar 
                  folders={this.state.allFolders} 
                  clickHandler={selected => this.setSelected(selected)}
                />} 
        />
        <Route path ="/note/:noteId" 
               render={ (routerProps) => 
               <SidebarNoteDetails 
                  notes={this.state.allNotes} 
                  folders={this.state.allFolders}
                  noteId={routerProps.match.params.noteId}
                />} 
        />
        <Route exact path="/" 
               render={ (routerProps) =>
               <Notes 
                  notes={this.state.allNotes}
                  folderId={routerProps.match.params.folderId}
                />}
        />
        <Route path="/folder/:folderId" 
               render={ (routerProps) =>
               <Notes 
                  notes={this.state.allNotes}
                  folderId={routerProps.match.params.folderId}
                />}
        />
        <Route path="/note/:noteId" 
               render={(routerProps) => 
               <NoteDetails 
                  notes={this.state.allNotes}
                  noteId={routerProps.match.params.noteId}
                />} 
        />
      </main>
    </div>
    );
  }
}

export default App;