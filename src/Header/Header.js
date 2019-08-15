import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <NavLink to="/">
                    <h2>noteful</h2>
                </NavLink>
            </header>
        )
    }
}