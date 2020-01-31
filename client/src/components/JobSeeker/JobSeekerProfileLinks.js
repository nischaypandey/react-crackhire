import React, { Fragment } from 'react';
import NavItems from '../NavItems';

const JobSeekerProfileLinks = (props) => {
    const items = [
        { href: "/dashboard", text: "DashBoard" },
        { href: "/logout", text: "LogOut" }
    ];
    return (
        <Fragment>
          <NavItems items={items}/>
        </Fragment>
    );
};

export default JobSeekerProfileLinks;
