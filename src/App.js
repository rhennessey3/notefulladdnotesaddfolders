import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import { Route } from 'react-router-dom';
import STORE from './dummy-store.js';

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
  render(){
    return (
      <div className="App">
        <Header />
        <div className="sidebar">
          <Route exact path='/' render={() => <Sidebar folders={this.state.allFolders} />} />
          <Route exact path='/folder/:folderId' render={() => <Sidebar folders={this.state.allFolders} selected={this.state.selectedFolder}/>} />
        </div>
        <main>
          <div className="notes">
            <Route exact path="/" component={Notes} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
          