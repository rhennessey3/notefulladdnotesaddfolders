import React from 'react';

import '../Add.css';

export default class AddNote extends React.Component{
    render(){
        return(
            <div className="popup__form">
                <form className="add__item" id="addNote">

                    <label htmlFor="noteName">Note Name*: 
                        <input type="text" name="noteName" id="noteName" />
                    </label>
                    
                    <label htmlFor="noteContent">Content*: 
                        <input type="textarea" name="noteContent" id="noteContents" />
                    </label>
                    <button type="submit">Add Note</button>
                </form>
            </div>
        )
    }
}