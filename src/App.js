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
      selectedFolder: '', //b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1
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
         <Route exact path ="/" render={ () => <Sidebar 
            folders={this.state.allFolders} 
            clickHandler={selected => this.setSelected(selected)}/>} />
          <Route path ="/folder" render={ () => <Sidebar 
            folders={this.state.allFolders} 
            clickHandler={selected => this.setSelected(selected)}/>} />
            <Route path ="/note/:noteId" 
              render={ (routerProps) => <SidebarNoteDetails 
                notes={this.state.allNotes} 
                folders={this.state.allFolders}
                noteId={routerProps.match.params.noteId}/>} />
          <Route exact path="/" component={Notes} />
          <Route path="/folder/:folderId" component={Notes} />
          <Route path="/note/:noteId" component={NoteDetails} />
        </main>
      </div>
    );
  }
}

export default App;
          
    //      <Route path='/folder/:folderId' render={() => <Sidebar folders={this.state.allFolders} selected={this.state.selectedFolder}/>} />
//          <Route exact path='/' render={() => <Sidebar folders={this.state.allFolders} />} />
/*           <Route exact path="/" render={() => 
              <Notes 
                selected={this.state.selectedFolder} />} />
            <Route path="/folder/:folderId" render={() => 
              <Notes 
                selected={this.state.selectedFolder} />} />*/