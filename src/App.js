import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import NoteDetails from './NoteDetails/NoteDetails';
import SidebarNoteDetails from './SidebarNoteDetails/SidebarNoteDetails';
import { Route } from 'react-router-dom';
import STORE from './dummy-store.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFolder: '',
      selectedNote: '',
      allFolders: STORE.folders,
      allNotes: STORE.notes,
    }
  }

  setSelected(selected){
    this.setState({
      selectedFolder: selected
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