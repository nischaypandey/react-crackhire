import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import Logo from './../logo.png';

const NavBar = (props) => {
    return (
        <Navbar variant="light" bg="white" expand="lg">
          <Navbar.Brand href="/">
            <Link to="/landing">
              <img src={Logo}/>
            </Link>
          </Navbar.Brand>
          { props.children ? <Navbar.Toggle aria-controls="navbar-nav"/> : ""}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              { props.children }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
