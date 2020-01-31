import React from 'react';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';

const EmployerDashboardNavBar = props => {
    function shortlisted(){
        /* ajax call */
        return "";
    }
    const items = [
        {href: "/employerdashboard", text: "Dashboard"},
        {href: "/shortlisted", text: "Shortlisted Resume(" + shortlisted() + ")"},
        {href: "/cvaccessleft", text: "CV ACCESS LEFT"}
    ];
    return (
        <NavBar>
          <NavLinks items={items}/>
        </NavBar>
    );
};

export default EmployerDashboardNavBar;
