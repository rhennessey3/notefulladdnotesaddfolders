import React from 'react';

import ValidationError from '../ValidationError';

import '../Add.css';

export default class AddNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            noteName: "",
            noteContent: "",
            touched: false,
        }
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNoteName = this.handleNoteName.bind(this);
        this.handleNoteContent = this.handleNoteContent.bind(this);
    }

    handleAddClick(){
        this.props.addNoteHandler();
    }

    handleNoteName(e){
        this.setState({
            touched: true,
            noteName: e.target.value,
        })
    }

    handleNoteContent(e){
        this.setState({
            touched: true,
            noteContent: e.target.value,
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            touched: true,
        })
        this.handleAddClick();
    }
    
    validateForm(){
        const noteName = this.state.noteName.trim();
        if(noteName.length === 0){
            return 'Please enter a name for your note.';
        }
    }

    render(){
        const hasNoteError = this.validateForm() ? true : false;

        return(
            <div className="popup__form">
                <form className="add__item" id="addNote" onSubmit={e => this.handleSubmit(e)}>

                    <label htmlFor="noteName">Note Name*: 
                        <input type="text" name="noteName" id="noteName" onChange={e => this.handleNoteName(e)}/>
                    </label>
                    
                    <label htmlFor="noteContent">Content: 
                        <input type="textarea" name="noteContent" id="noteContents" onChange={e => this.handleNoteContent(e)} />
                    </label>

                    <div className="buttons">
                        <button type="submit" disabled={hasNoteError}>Add Note</button>
                        <button>Cancel</button>
                    </div>

                    <p>* required field</p>

                </form>
            </div>
        )
    }
}