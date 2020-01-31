import React from 'react';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';

const EmployerProfileNavBar = props => {
    const items = [
        {href: "/employer/:id/cvaccess", text: "CV Access"},
        {href: "/employer/:id/postjob", text: "Post New Job"},
        {href: "/employer/:id/postinternship", text: "Post New Internship"},
        {href: "/employer/:id/postwalkin", text: "Post New Walkin"}
    ];
    return (
        <NavBar>
          <NavLinks items={items}/>
        </NavBar>
    );
};

export default EmployerProfileNavBar;
