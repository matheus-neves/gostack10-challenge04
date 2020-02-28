import React from 'react';
import ImgLogo from '../../assets/header/logo.svg';
import ImgProfile from '../../assets/header/profile.svg';

import './styles.css';

function Header() {

  return (
    
    <header className="main-header">

      {/* <ImgLogo className="logo" /> */}
      <img src={ImgLogo} alt=""/>

      <a href="#" className="profile">
        <span>Meu perfil </span>
        {/* <ImgProfile /> */}
      </a>

    </header>

  )
}

export default Header;