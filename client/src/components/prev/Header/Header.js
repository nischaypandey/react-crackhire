import React, { Component } from 'react';
// import { Link, Router } from "react-router-dom";

const Header = (props) =>  {
    // styles
    const nav = "navbar navbar-expand-md navbar-light bg-light";
    const logo = "navbar-brand";
    const togglerCont = "navbar-toggler";
    const toggler = "navbar-toggler-icon";
    const navItemsCont = "collapse navbar-collapse";
    const navLinks = "navbar-nav text-dark";
    const navItem = "nav-item";
    const navLink = "nav-link text-capitalize";
    
    return (
        <nav className={nav}> {/* Navbar */}
          <a className={logo} href="#">CrackHire</a>
          {/* Toggler on small devices */}
          <button className={togglerCont} type="button" data-toggle="collapse"
                  data-target="#navContent"
                  aria-controls="navContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className={toggler}></span>
          </button>
          {/* Nav Links */}
          <div id="navContent" className={navItemsCont}>
            <ul className={navLinks}>
              {/* props.links.map(link =>
                 <li className={navItem}>
                 <a className={navLink} href={link.href}>link.text</a>
                 </li>
                 )*/}
              <li className={navItem}>
                <a className={navLink} href="#">Home</a>
              </li>
              <li className={navItem}>
                <a className={navLink} href="#">Link</a>
              </li>
            </ul>
            
          </div>
          
        </nav>
    );

};
export default Header;
