import React from 'react';
import { Link } from 'react-router-dom';

import './Note.css';


const Note = props => {
console.log(props)
    return (

    <Link style={{textDecoration: "none", color: "black"}} to={`/notes/note/${props.note._id}`}>

            <div className="note ui-state-default">{/*ui-state-default..jQuery class for drag & drop*/}

                <div className="note-title">{props.note.title}</div>
                
                <p className="note-body">{props.note.body}</p>
        
            </div>

    </Link> 

    )

}


export default Note;
