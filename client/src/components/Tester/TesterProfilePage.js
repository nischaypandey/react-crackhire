import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from '../NavBar';
import NavLinks from '../NavLinks';
import TesterProfile from './TesterProfile';

const TesterProfilePage = props => {
    const [credits, setcredits] = useState(1);
    const navitems = [
        {href: "/creditrefilltester", text: `Credits-${credits}`},
        {href: "/tester/:id/profile", text: "Profile"}
    ];
    return (
        <Container fluid>
          <Row>
            <Col sm={12} className="mb-2">
              <NavBar>
                <NavLinks items={navitems}/>
              </NavBar>
            </Col>
            <Col sm={12} md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
              <Card border="primary" className="py-2">
                <TesterProfile />
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default TesterProfilePage;
