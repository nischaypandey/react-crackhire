import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';
import Icon from '../Icon';

const TestNavBar = () => {
    const items = [
        {href: "/jobseeker/:id/resume", text: "Resume"},
        {href: "/premium/jobseeker", text: "Premium Plans"},
        {href: "/", text: <Icon icon={{icon: "far fa-user fa-2x"}}/>},
        {href: "", text: ""},
    ];
    return (
        <NavBar>
          <NavLinks items={items}/>
        </NavBar>
    );
};

const Option = props => {
    return (
        <div className="d-flex align-items-center">
          <Form.Check custom label={<span className="d-flex align-items-center">
                                      <span className="mr-1">A</span>
                                      <span variant="outline-primary">Damn</span>
                                    </span>}
                      id="option" className="d-flex align-self-center"/>
        </div>
    );
};

const Test = props => {
    const [test, settest] = useState(
        {
            section1: [],
            section2: []
        }
    );
    return (
        <Container fluid>
          <Row>
            <Col sm={12}>
            </Col>
          </Row>
        </Container>
    );
};

export default Option;
