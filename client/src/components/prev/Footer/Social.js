import React from 'react';

import { socialLinks } from './socialLinks';

const Social = (props) => {
    const socialStyle = "my-1 col-12 mx-auto";
    const buttonStyle = "m-1 text-dark";
    return (
        <div className={socialStyle}>
          {socialLinks.map(link =>
                           <a href={link.href} className={buttonStyle}>{link.icon}</a>
                          )
          }
        </div>
    );
};

export default Social;
