/**if note can't be found in that folder */
import React from 'react';

export default class NoteDisplayError extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render(){
        const display = this.state.hasError
          ? <p>Could not display this note.</p>
          : this.props.children;

          return display;
    }
}