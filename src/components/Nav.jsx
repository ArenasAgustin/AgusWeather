import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styleNav from './styles/Nav.module.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className={styleNav.navBar}>
        <a href = "/AgusWeather/" className = {styleNav.anchor}>
          <img
            alt = "logo Henry Bootcamp"
            src = {Logo}
            className = {styleNav.logoHenry}
          />{' '}
          <h2 className = {styleNav.home}>Henry Wather App</h2> 
        </a>

        <SearchBar
          onSearch={onSearch}
          className={styleNav.searchBar}
        />

        <Link to='/AgusWeather/about' className={styleNav.anchor}>
          <h2 className = {styleNav.about}>About</h2>
        </Link>
    </nav>
  );
};

export default Nav;
