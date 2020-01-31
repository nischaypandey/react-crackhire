import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItems from './NavItems';

const NavPills = (props) => {
    return (
        <Nav variant="pills" defaultActiveKey={0}>
          <NavItems items={props.items}/>
        </Nav>
    );
};
    
export default NavPills;
