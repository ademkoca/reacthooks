import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Nav.css";


const Nav = ({ username }) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Like me!</a>

                {
                    <p className="float-end text-white pt-2 pe-4">{username}</p>

                }

            </div>
        </nav>

    )
}

export default Nav;
