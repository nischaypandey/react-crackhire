import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';

const SignedOutNavLinks = (props) => {
    return (
        <Fragment>
          <Nav.Link>Job Search</Nav.Link>
          <Nav.Link>Events</Nav.Link>
          <Nav.Link>Services</Nav.Link>
          <Nav.Link>Blogs</Nav.Link>
          <Nav.Link>Advertise</Nav.Link>
        </Fragment>
    );
};

export default SignedOutNavLinks;
