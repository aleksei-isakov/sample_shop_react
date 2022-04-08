import React from 'react';
import style from './NavBar.module.css'
import logo from './pokedex-icon-21.jpg'
import {Link} from "react-router-dom";
import catch_logo from './catch_logo.png'

const NavBar = () => {
    return (
        <div className={style.NavBar}>
           <Link to='/home'><img className={style.img} src={logo}  alt="PokedexIcon"/></Link>
            <img className={style.catch_logo} src={catch_logo} alt="main Logo"/>
           <nav className={style.navItems}>
               <Link to='/home'>Home</Link>
               <Link to='/collection'>My collection</Link>
           </nav>
        </div>
    );
};

export default NavBar;
