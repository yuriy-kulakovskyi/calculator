import React from 'react';
import Status from './Status/Status';
import Time from './Time/Time';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content content">
        <Time />
        <Status />
      </div>
    </header>
  );
}

export default Header;