import React from 'react';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';

const LandingPageNavBar = props => {
    const navItems = [
        { href: "/landing", text: "JobSearch" },
        { href: "/events", text: "Events" },
        { href: "/services", text: "Services" },
        { href: "/blogs", text: "Blogs" },
        { href: "/advertise", text: "Advertise" }
    ];
    return (
        <NavBar>
          <NavLinks items={navItems}/>
        </NavBar>
    );
};

export default LandingPageNavBar;
