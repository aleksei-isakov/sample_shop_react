import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.Footer}>
            <p className={style.footerPar}>Pokedex</p>
            <p className={style.footerPar}>EPAM Systems© 2021-2022</p>
        </div>
    );
};

export default Footer;