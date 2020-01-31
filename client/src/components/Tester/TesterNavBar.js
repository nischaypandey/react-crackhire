import React from 'react';
import { Dropdown } from 'react-bootstrap';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';
import Icon from '../Icon';

const TesterNavBar = props => {
    const items = [
        {href: "/tester/:id/resume", text: "Resume"},
        {href: "/premiumplans/tester", text: "Premium Plans"},
        {href: "/tester/:id/subscriptions", text: <Icon icon={{icon: "far fa-user fa-2x"}}/>},
        {href: "/tester/:id/profile", text: <Icon icon={{icon: "far fa-bell fa-2x"}}/>},
    ];
    return (
        <NavBar>
          <NavLinks items={items}/>
        </NavBar>
    );
};

export default TesterNavBar;
