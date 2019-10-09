import React from 'react';
import PropTypes from 'prop-types';

import './NoteDetails.css';

export default class NoteDetails extends React.Component{
    render(){
        const note = (this.props.notes
            .find(note => note.note_id == this.props.noteId));
            
        return(
            note 
            ? (<div className="note__details">
                <h3>{note.note_name}</h3>
                <p>Date Modified: {note.date_modified}</p>
                <p>{note.content}</p>
              </div>)
            : <div>
                <h3 className="note__error">Oops - ran into an into an error displaying the notes! Click the header to go back home.</h3>
              </div>

        );
    }
}


NoteDetails.propTypes = {
    notes: PropTypes.array,
    noteId: PropTypes.string.isRequired
};