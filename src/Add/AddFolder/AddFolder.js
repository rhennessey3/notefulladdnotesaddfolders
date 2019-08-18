import React from 'react';

import '../Add.css';
import ValidationError from '../ValidationError.js';

export default class AddFolder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newFolder: "",
            touched: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* posts the folder to the endpoint */
    handleSubmit(e){
        e.preventDefault();
        console.log('handling submit');
        this.setState({
            touched: true,
        })
        const userFolder = this.state.newFolder;
        console.log(userFolder);
    }

    /*make sure user has entered value for folder before submitting */
    validateForm(){
        console.log('validating')
        const folder = this.state.newFolder.trim();
        if(folder.length === 0){
            return 'Please enter a name for your folder.';
        }
    }

    /*save folder name */
    updateFolder(e){
        console.log('storing folder data ')
        this.setState({
            newFolder: e.target.value,
        })
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
                    <button type="submit">Add Folder</button>
                </form>
            </div>
        )
    }
}

