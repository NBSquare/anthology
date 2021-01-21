import React from 'react';
import logo from './logo-light.svg';
import { Link, useLocation } from 'react-router-dom';
import './css/Nav.css';

const Nav = ({ hasBackground, locations }) => {
  const backgroundColor = useLocation().pathname === '/' ? 'bg-transparent nav-transparent' : 'bg-primary';
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${backgroundColor}`}>
      <div className='container-fluid px-4'>
        <Link to='/' className='navbar-brand'>
          <img src={logo} alt='' height='33' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='ms-auto navbar-nav' id='right-nav'>
            {locations.map((location) => (
              <li className='nav-item' key={location.href}>
                <Link to={location.href} className='nav-link'>
                  {location.name}
                </Link>
              </li>
            ))}
            <li className='nav-item'>
              <span className='m-4'></span>
            </li>
            <li className='nav-item'>
              <button className='btn btn-primary'>Free Trial</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
