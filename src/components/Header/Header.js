import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    let activeStyle = {
        color: "red",
        fontSize: "3.0rem",
        textDecoration: "none"
    };

    let notActiveStyle = {
        color: "blue",
        fontSize: "3.0rem",
        textDecoration: "none"
    };

    return (
        <header>
            <h1>Expensify</h1>
            <NavLink
                className={navigation}
                to="/"
                style={({ isActive }) => isActive ? activeStyle : notActiveStyle}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/add"
                style={({ isActive }) => isActive ? activeStyle : notActiveStyle}
            >
                Add New Expense
            </NavLink>
            <NavLink
                to="/help"
                style={({ isActive }) => isActive ? activeStyle : notActiveStyle}
            >
                Help
            </NavLink>
        </header>
    );
};


export default Header;
