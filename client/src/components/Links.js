import React, { Fragment } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Links = props => {
    return (
        <div className="d-flex justify-content-around">
          {props.items.map(link => <LinkContainer to={link.href}><a>{link.text}</a></LinkContainer>)}
        </div>
    );
};

export default Links;
