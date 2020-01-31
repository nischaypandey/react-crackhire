import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import OtpInput from 'react-otp-input';

const VerifyOTP = props => {
    const [otp, setotp] = useState('');
    function handleSubmit(){
    }
    function resendOTP(){
    }
    return (
        <Card border="white">
          <Card.Body>
            <h3 className="text-center">Verify OTP</h3>
            <p className="font-weight-bold text-center mb-3">Display the phone number entered</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Enter your OTP</Form.Label>
                <OtpInput numInputs={6} onChange={setotp} disabled={false} value={otp}
                          containerStyle={{display: 'flex', justifyContent: 'space-around',
                                           marginTop: 10}}
                          inputStyle={{width: 40, height: 50,
                                       border: '1px solid #0275d8', borderRadius: 5}}/>
              </Form.Group>
              <Form.Group className="d-flex justify-content-between">
                <Button type="submit">Validate Phone</Button>
                <Button onClick={() => resendOTP(/*number*/)}>Resend OTP</Button>
              </Form.Group>
            </Form>
            <div>
              Incorrect Number? Go Back <LinkContainer to="/signin">
                                          <a>Click here</a>
                                        </LinkContainer>
            </div>
          </Card.Body>
        </Card>
    );
};

export default VerifyOTP;
