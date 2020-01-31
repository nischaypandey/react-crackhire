import React from 'react';

const Links = (props) => { //links => [link, [link]...] , link => { href, name }
    const containerStyle = "row mx-auto my-1";
    const linkStyle = "btn btn-link";
    return (
        <div id="links" className={containerStyle}>
          {props.links.map(link => <a href={link.href} className={linkStyle}>{link.name}</a>)}
        </div>
    );
};

export default Links;
