import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          Номе
        </HeaderLink>
        <HeaderLink to="/news">
        News
        </HeaderLink>
        <HeaderLink to="/profile">
        Profile
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
