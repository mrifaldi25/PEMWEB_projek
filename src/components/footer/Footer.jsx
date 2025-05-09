import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

<<<<<<< HEAD
import bg from "./../../assets/footer-bg.jpg";
import logo from "./../../assets/Logo_1.png";
=======
import bg from "./../../assets/bg.jpg";
import logo from "./../../assets/logo_1.png";
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a

import * as Config from "./../../constants/Config";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
<<<<<<< HEAD
          <div className="Logo_1.png">
            <img src={logo} alt="Logo_1.png" />
=======
          <div className="logo_1.png">
            <img src={logo} alt="logo_1.png" />
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a
            <Link to={`/${Config.HOME_PAGE}`}>@MovieVerse2025</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>Home</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Contact us</Link>
<<<<<<< HEAD
          </div>
          <div className="footer__content__menu">
=======
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a
            <Link to={`/${Config.HOME_PAGE}`}>Term of service</Link>
            <Link to={`/${Config.HOME_PAGE}`}>About us</Link>
          </div>
          <div className="footer__content__menu">
<<<<<<< HEAD
=======
            <Link to={`/${Config.HOME_PAGE}`}>Live</Link>
            <Link to={`/${Config.HOME_PAGE}`}>FAQ</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Premium</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
