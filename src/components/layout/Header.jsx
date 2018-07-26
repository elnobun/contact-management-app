import React from 'react';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          Contact Manager
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
