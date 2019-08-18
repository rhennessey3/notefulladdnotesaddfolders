import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <NavLink to="/">
                    <h2>Noteful</h2>
                </NavLink>
                <p>A place for organizing your notes.</p>
            </header>
        )
    }
}