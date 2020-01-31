import React from 'react';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const BlogNavBar = props => {
    const links = [
        {href: "/blog/technical", text: "Technical Blog"},
        {href: "/blog/interview", text: "Interview Experience"},
        {href: "/blog/guidance", text: "Corporate Guidance"},
        {href: "/blog/review", text: "Company Reviews"}
    ];
    return (
        <NavBar>
          <NavLinks items={links}/>
          <LinkContainer to="/blog/write" className="d-flex align-items-center">
            <Button variant="outline-primary">Write for Us</Button>
          </LinkContainer>
        </NavBar>
    );
};

export default BlogNavBar;
