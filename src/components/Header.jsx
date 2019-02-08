import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <p className="navContainer">
          <Link to={'/'} className="navLink navLink--title">
            Menu Wizard
          </Link>
        </p>
      </div>
      <nav className="mainNavigation">
        <p className="navContainer">
          <Link to={'/add-recipe'} className="navLink">
            Add Recipe
          </Link>
        </p>
        <p className="navContainer">
          <Link to={'/menu'} className="navLink">
            Menu Plan
          </Link>
        </p>
      </nav>
    </header>
  );
};

export default Header;
