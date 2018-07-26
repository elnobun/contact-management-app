import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fab fa-staylinked" />&nbsp; Contact Manager
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-address-book" />&nbsp; Add Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-info-circle" />&nbsp; About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
