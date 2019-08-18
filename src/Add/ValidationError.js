import React from 'react';

export default function ValidationError(props){
    if(props.message){
        if(props.message){
            return(
                <div className="error">
                    <p>{props.message}</p>
                </div>
            );
        }
    }
    /*return empty fragment if no error present*/
    return <></>
}