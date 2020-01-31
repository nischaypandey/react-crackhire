import React, { Fragment } from 'react';
import NavLinks from '../NavLinks';
import Icon from '../Icon';

const JobSeekerNavLinks = (props) => {
    const items = [
        { text: "JobSearch", href:"/jobseekerdashboard"},
        { text: "Resume", href:"/resume"},
        { text: "Premium Plans", href:"/premium"},
        { text: <Icon icon={{icon: "far fa-bell fa-2x"}}/>, href:"/notifications"},
        { text: <Icon icon={{icon: "far fa-user fa-2x"}}/>, href:"/profile"}
    ];
    return (
        <Fragment>
          <NavLinks items={items} />
        </Fragment>
    );
};

export default JobSeekerNavLinks;
