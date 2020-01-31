import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LandingPageNavBar from './LandingPage/LandingPageNavBar';
import VerifyOTP from './VerifyOTP';

const VerifyOTPPage = props => {
    return (
        <Container fluid>
          <LandingPageNavBar />
          <Row>
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}
                 className="mt-3">
              <Card border="primary">
                <VerifyOTP />
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default VerifyOTPPage;
