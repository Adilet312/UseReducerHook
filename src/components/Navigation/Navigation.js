import React from 'react';
import Search from './Search/Search';
import {GiHamburgerMenu} from 'react-icons/gi';
import './Navigation.css';
const Navigation = () => {
  return(
    <header>
      <GiHamburgerMenu style = {{color:"#fff", position:"absolute", left:"20px",top: "30px",fontSize:"25px"}}/>
      <Search/>
    </header>
  )
}

export default Navigation;
