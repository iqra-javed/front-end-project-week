import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import SideNav from './components/SideNav/SideNav';
import NewNote from './components/NewNote/NewNote';
import NoteView from './components/NoteView/NoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route path="/" component={SideNav} />
       <Route exact path="/" component={NotesContainer} />
       <Route path="/create" component={NewNote} />
       <Route path="/note/:id" component={NoteView}/>
      </div>
    );
  }
}

export default App;
