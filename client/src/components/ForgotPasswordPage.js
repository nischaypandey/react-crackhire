import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ForgotPassword from './ForgotPassword';
import Logo from './../logo.png';
import LandingPageNavBar from './LandingPage/LandingPageNavBar';

const ForgotPasswordPage = props => {
    return (
        <Container fluid>
          <LandingPageNavBar />
          <Row className="mt-3">
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
              <ForgotPassword />
            </Col>
          </Row>
        </Container>
    );
};

export default ForgotPasswordPage;
