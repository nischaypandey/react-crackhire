import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavLinks = props => {
    return (
        <Fragment>
          { props.items.map((item, idx) =>
                            <Nav.Item key={"item-" + String(idx)} className="d-flex align-items-center">
                              <LinkContainer to={item.href}
                                             activeClassName="bg-secondary text-white rounded">
                                <Nav.Link eventKey={String(idx)}>
                                  {item.text}
                                </Nav.Link>
                              </LinkContainer>
                            </Nav.Item>)}
        </Fragment>
    );
};

export default NavLinks;
