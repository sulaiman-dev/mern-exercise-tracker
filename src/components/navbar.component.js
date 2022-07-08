import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collpse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"></li>
                        <Link to="/" className="">Exercises</Link>
                        <li className="nav-item"></li>
                        <Link to="/create" className="">Create Exercise Log</Link>
                        <li className="nav-item"></li>
                        <Link to="/user" className="">Create User</Link>
                    </ul>
                </div>
            </nav>
        )
    }
}