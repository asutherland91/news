import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logoImage from '../../Assets/Untitled_Artwork.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img className="logo" src={logoImage} alt={'Daily Cat News Logo'} />
        </NavLink>
        <div className="tag-wrapper">
          {/* <h4 className="tag-line">
        "Purrfectly Informed: Your Daily Cat News Fix!"
        </h4> */}
        </div>
      </div>
    </header>
  );
};
