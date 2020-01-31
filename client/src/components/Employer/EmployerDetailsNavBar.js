import React from 'react';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';

const EmployerDetailsNavBar = props => {
    const items = [
        {href: "/employerdashboard", text: "Dashboard"},
        {href: "/logout", text: "Logout"}
    ];
    return (
        <NavBar>
          <NavLinks items={items}/>
        </NavBar>
    );
};

export default EmployerDetailsNavBar;
