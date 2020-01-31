import React from 'react';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';

const JobPostNavBar = props => {
    function credits(){
        return "0";
    }
    const items = [
        {href: "/credits", text: "Credits Left: " + credits()},
        {href: "/employer/:id/profile", text: "ProfileName"}
    ];
    return (
        <NavBar>
          <NavLinks items={items}/>
        </NavBar>
    );
};

export default JobPostNavBar;
