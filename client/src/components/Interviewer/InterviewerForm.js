import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InterviewerForm = (props) => {
    const [state, setState] = useState({
        name: "",
        company: "",
        skills: null ,
        exp: null ,
        charge: null ,
    }
                                      );
    function handleSubmit(){
        // ajax call
    }
    return (
        <Card className="p-2">
          <Form onSubmit={handleSubmit}>
            <h3 className="mb-3">Experience in Interview</h3>         
            <Form.Group className="px-2 mb-2">
              <h5>Name</h5>
              <Form.Control onChange={(e) => setState({...state, name: e.target.value})}/>
            </Form.Group>
            <Form.Group className="px-2 mb-2">
              <h5>Company Name</h5>
              <Form.Control onChange={(e) => setState({...state, company: e.target.value})}/>
            </Form.Group>
            <Form.Group className="px-2 mb-2">
              <h5>Skills</h5>
              <Form.Control onChange={(e) => setState({...state, skills: e.target.value.split(',')})}/>
              <small>Seperate by ','</small>
            </Form.Group>
            <Form.Group className="px-2 mb-2">
              <h5>Years of Experience in Each Domain</h5>
              <Form.Control onChange={(e) => setState({...state, exp: e.target.value.split(',')
                                                       .map(e => Number(e))})} />
              <small>Seperate by ','</small>
            </Form.Group>
            <Form.Group className="px-2 mb-2">
              <h5>Charges in these Domain</h5>
              <Form.Control onChange={(e) => setState({...state, charge: Number(e.target.value)})}/>
            </Form.Group>
            <Button variant="primary" className="ml-2 mt-2">Submit</Button>
          </Form>
        </Card>
    );
};

export default InterviewerForm;
