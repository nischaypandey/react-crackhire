import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');
    function handleSubmit(event){
        // ajax call
    }
    return (
        <Card border="white" className="py-3 px-2">
          <Card.Title as="h2" className="text-capitalize text-center text-blue p-2">
            Forgot your Password
          </Card.Title>
          <Card.Subtitle className="text-center">
            Dont worry! Just fill your email, we will help you to reset your password
          </Card.Subtitle>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="mb-2">Enter your email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                              onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mt-3">
                      <Link to="/signin" className="text-capitalize text-primary">
                        Back to Login
                      </Link>
                      <Button type="submit">Send Email</Button>
                  </div>
            </Form>
            <div>
              New to CrackHire? <Link to="/signup" className="text-blue text-underline">SignUp</Link>
            </div>
          </Card.Body>
        </Card>
    );
};
   
export default ForgotPassword;
