import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          Номе Page
        </HeaderLink>
        <HeaderLink to="/features">
        Features Page
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
