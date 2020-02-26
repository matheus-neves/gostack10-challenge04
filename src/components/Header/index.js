import React from 'react';
import ImgLogo from '../../assets/logo.svg';
import ImgProfile from '../../assets/profile.svg';

import './styles.css';

function Header() {

  return (
    
    <header className="main-header">

      <ImgLogo className="logo" />

      <a href="#" className="profile">
        <span>Meu perfil </span>
        <ImgProfile />
      </a>

    </header>

  )
}

export default Header;