import React from 'react';

import Copyright from './Copyright';
import Links from './Links';
import Social from './Social';
import { links } from './links';

const Footer = (props) => {
    const containerStyle = "row text-center";
    return (
        <div className={containerStyle}>
          <Links links={links}/>
          <Social />
          <Copyright />
        </div>

    );
};

export default Footer;
