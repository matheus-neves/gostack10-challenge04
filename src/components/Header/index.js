import React from 'react';
import ImgLogo from '../../assets/header/logo.svg';
import ImgProfile from '../../assets/header/profile.svg';

import './styles.css';

function Header() {

  return (
  
    <header className="main-header">
      <img src={ImgLogo} alt="Facebook logo"/>
      <a href="#" className="profile">
        <span>Meu perfil</span>
        <img src={ImgProfile} alt="Profile logo"/>
      </a>
    </header>
  )
}

export default Header;