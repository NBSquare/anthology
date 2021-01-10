import React from 'react';
import logo from './logo-light.svg';
import { Link } from 'react-router-dom';

const Nav = ({ locations }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid px-4">
                <Link to="/" class="navbar-brand"><img src={logo} alt="" height="33" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="ms-auto navbar-nav" id="right-nav">
                    {
                        locations.map(location => (
                            <li className="nav-item">
                                <Link to={location.href} className="nav-link">{location.name}</Link>
                            </li>
                        ))
                    }
                    <li class="nav-item">
                        <span class="m-4"></span>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-primary">Free Trial</button>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;