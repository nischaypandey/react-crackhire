import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Field from './Field';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Check from './Check.js';

const SignUp = (props) => {
    const [fields, setFields] = useState({});
    const [hidden, sethidden] = useState(true);
    function handleSubmit(event){
        event.preventDefault();
        if (fields.password === fields.confirmPassword){
            // ajax call
        } else {
            alert("Passwords don't match");
        }
    }
    return (
        <Card border="white" className="py-2">
          <Card.Title className="text-primary text-center text-capitalize mt-1"
                      as="h2">
            Sign Up
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
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-2">
                    <Form.Control required type="text" placeholder="Name"
                                  onChange={(e) => setFields({...fields, name: e.target.value})} />
                    <InputGroup.Append
                      className="bg-primary px-3 rounded text-white d-flex align-items-center">
                      <i className="far fa-user"></i>
                    </InputGroup.Append>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <Form.Control required type="email" placeholder="Email"
                                  onChange={(e) => setFields({...fields, email: e.target.value})} />
                    <InputGroup.Append
                      className="bg-primary px-3 rounded text-white d-flex align-items-center">
                      <i className="far fa-envelope"></i>
                    </InputGroup.Append>
                  </InputGroup>
                  <InputGroup required className="mb-2">
                    <Form.Control required type={hidden? "password": "text"} placeholder="Password"
                                  onChange={(e) => setFields({...fields, password: e.target.value})} />
                    <Button variant="light"
                              onClick={() => sethidden(!hidden)}>{hidden ? "Show": "Hide"}</Button>
                    <InputGroup.Append
                      className="bg-primary px-3 rounded text-white d-flex align-items-center">
                      <i className="fas fa-unlock-alt"></i>
                    </InputGroup.Append>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <Form.Control required type={hidden? "password": "text"}
                                  placeholder="Confirm password"
                                  onChange={(e) => setFields({...fields, confirmPassword: e.target.value})} />
                    <Button variant="light"
                              onClick={() => sethidden(!hidden)}>{hidden ? "Show": "Hide"}</Button>
                    <InputGroup.Append
                      className="bg-primary px-3 rounded text-white d-flex align-items-center">
                      <i className="fas fa-unlock-alt"></i>
                    </InputGroup.Append>
                  </InputGroup>
                  <InputGroup required className="mb-2">
                    <Form.Control required type="text" placeholder="Mobile Number" 
                                  onChange={(e) => setFields({...fields, number: e.target.value})} />
                    <InputGroup.Append
                      className="bg-primary px-3 rounded text-white d-flex align-items-center">
                      <i className="fas fa-phone"></i>
                    </InputGroup.Append>
                  </InputGroup>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Form.Check custom type="checkbox" label="Terms & Conditions" id="tnc" required/>
                    </div>
                    <div>
                      <Button type="submit" className="bg-primary">Sign In</Button>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
    );
};

export default SignUp;
