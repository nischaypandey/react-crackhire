import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavItems = (props) => {
    return (
        <Fragment>
          { props.items.map((item, idx) =>
                            <Nav.Item key={"item-" + String(idx)}>
                              <Nav.Link eventKey={String(idx)} href={item.link}>
                                {item.text}
                              </Nav.Link>
                            </Nav.Item>)}
        </Fragment>
    );
};

export default NavItems;


