import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Note from '../Note/Note';
import './NotesContainer.css';
import { fetchNotes } from '../../actions';
import SearchNote from '../SearchNote/SearchNote';


class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
    }



    render() {
        

        let notesArr = [];
        for (let i = this.props.notes.length -1; i >= 0; i--) {
            notesArr.push(this.props.notes[i])
        } /*looping backwards and pushing into empty array to display 
            notes with most recent added/edited note on top of list-view */

    

        return (
            
            <div id="sortable" className="notes-container">

                <div>
                    <input className="search-input" onChange={(e) => {this.props.notes.filter((note) => note.title == e.target.value)}} type=""text placeholder="search for a note.."></input>
                </div>

                <div className="your-notes">Your Notes:</div>

                {notesArr.map(note => <Note key={note.id} note={note}/>)}


            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}


export default connect(mapStateToProps, {fetchNotes})(NotesContainer);




//  BUGGY VERSION OF SEARCH ...replace above code with this if above code doesnt work out
//  import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import Note from '../Note/Note';
// import './NotesContainer.css';
// import { searchNote } from '../../actions';
// import SearchNote from '../SearchNote/SearchNote';


// class NotesContainer extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            searchedNote: [],
//            search: ""
//        }
//    }





//  searchNoteHandler = (e) => {
//     this.setState({search: e.target.value})
//  }

//  copy = this.props.notes.slice();
//  submitSearch = () => {
   
//     let result = this.copy.filter(note => {
//          return note.title == this.state.search
//      })
//     this.setState({searchedNote: this.state.searchedNote.concat(result)})
//     console.log(this.props.notes)

//  }


//     render() {
        

//         let notesArr = [];
//         for (let i = this.props.notes.length -1; i >= 0; i--) {
//             notesArr.push(this.props.notes[i])
//         } /*looping backwards and pushing into empty array to display 
//             notes with most recent added/edited note on top of list-view */

    

//         return (
            
//             <div id="sortable" className="notes-container">

//                 <div>
//                     <input onChange={this.searchNoteHandler} type=""text placeholder="search for a note.."></input>
//                  <button onClick={() => this.submitSearch()}>search</button>
//                 </div>

//                 <div className="your-notes">Your Notes:</div>

//                 {this.state.searchedNote.length !== 0 ? <Note note={this.state.searchedNote[0]}/> : notesArr.map(note => <Note key={note.id} note={note}/>) }

//                 {/* {notesArr.map(note => <Note key={note.id} note={note}/>)} */}


//             </div>
//         )

//     }

// }

// const mapStateToProps = state => {
    
//     return {
//         notes: state.notes
//     }
   
// }


// export default connect(mapStateToProps, {searchNote})(NotesContainer);


