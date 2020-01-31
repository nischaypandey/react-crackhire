import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LandingPageNavBar from './LandingPage/LandingPageNavBar';

const OTPVerified = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12} className="mb-2">
              <LandingPageNavBar />
            </Col>
            <Col sm={12} md={8} lg={6} className="mx-auto">
              <Card border="primary">
                <Card.Body style={{height: '50vh'}}>
                  <h2 className="text-center mb-5 text-primary">Verfied...</h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default OTPVerified;
