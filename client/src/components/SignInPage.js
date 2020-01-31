import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import RoleSelector from './RoleSelector';
import NavBar from './NavBar';
import Logo from './../logo.png';

const SignInPage = props => {
    return (
        <Container fluid>
          <Row className="mt-3">
            <Col sm={{span: 4, offset: 4}}>
              <Link to="/landing">
                <img src={Logo} className="d-block mx-auto" />
              </Link>
            </Col>
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} className="mt-3 mb-1">
              <RoleSelector />
            </Col>
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
              <SignIn />
            </Col>
          </Row>
        </Container>
    );
};

export default SignInPage;
