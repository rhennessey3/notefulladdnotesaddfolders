import React from 'react';

import ValidationError from '../ValidationError.js';
import config from '../../config';

import '../Add.css';

export default class AddFolder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newFolder: "",
            touched: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    /* posts the folder to the endpoint if there's a valid name*/
    handleSubmit(e){
        e.preventDefault();
        console.log(e);
        this.setState({
            touched: true,
        })
        const userFolder = this.state.newFolder;
        /*need to do this only if name is valid */
        fetch(config.FOLDER_ENDPOINT, {
            method: 'POST',
            body: {name: userFolder},
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log(error));
        {this.handleAddClick()};
    }

    /*make sure user has entered value for folder before submitting */
    validateForm(){
        const folder = this.state.newFolder.trim();
        if(folder.length === 0){
            return 'Please enter a name for your folder.';
        }
    }

    /*save folder name */
    updateFolder(e){
        this.setState({
            newFolder: e.target.value,
        })
    }

    handleAddClick(){
        this.props.addClickHandler();
    }

    render(){
        const folderError = this.validateForm();

        return(
            <div className="popup__form" onSubmit={e => this.handleSubmit(e)}>
                <form className="add__item" id="addFolder">
                    <label htmlFor="folderName">Folder Name*: 
                        <input type="text" name="folderName" id="folderName" onChange={e => this.updateFolder(e)}/>
                    </label>
                    {this.state.touched && <ValidationError message={folderError} />}
                    <div className="buttons">
                        <button type="submit">Add Folder</button>
                        <button onClick={this.handleAddClick}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

