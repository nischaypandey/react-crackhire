import React, { useState } from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SignIn = (props) => {
    const [fields, setFields] = useState({
        email: "",
        password: "",
    });
    const [hidden, sethidden] = useState(true);
    return (
        <Card border="white" className="py-2">
          <Card.Title className="text-primary text-center text-capitalize mt-1"
                      as="h2">
            Sign in to CrackHire
          </Card.Title>
          <Card.Body>
            <Row>
              <Col sm={12} className="d-flex justify-content-center align-items-center text-primary mb-3">
                <a className="text-primary" href="">
                  <i className="fab fa-google-plus fa-2x mx-3"></i>
                </a>
                <a className="text-primary" href="">
                  <i className="fab fa-facebook-square fa-2x mx-3"></i>
                </a>
                <a className="text-primary" href="">
                  <i className="fab fa-linkedin fa-2x mx-3"></i>
                </a>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <InputGroup className="mb-2">
                      <Form.Control type="email" placeholder="Enter email"
                                    onChange={(e) => setFields({...fields, email: e.target.value}) } />
                      <InputGroup.Append
                        className="bg-primary px-3 rounded text-white d-flex align-items-center">
                        <i className="far fa-envelope"></i>
                      </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <Form.Control type={hidden? "password": "text"} placeholder="Enter password"
                                    onChange={(e) => setFields({...fields, password: e.target.value}) }/>
                      <Button variant="light"
                              onClick={() => sethidden(!hidden)}>{hidden ? "Show": "Hide"}</Button>
                      <InputGroup.Append
                        className="bg-primary px-3 rounded text-white d-flex align-items-center">
                        <i className="fas fa-lock"></i>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <LinkContainer to="/forgot">
                      <a>Forgot Password?</a>
                    </LinkContainer>
                    <Button type="submit">Sign In</Button>
                  </div>
                </Form>
                <div>
                  New to CrackHire? <LinkContainer to="/signup"><a>SignUp</a></LinkContainer>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
    );
};

export default SignIn;
