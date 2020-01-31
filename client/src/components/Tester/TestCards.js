import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TestCards = (props) => {
    const [test, setTest]= useState({
        size: props.size,
        mcq: [],
        current: 1
    });
    test.mcq[0] = makeMCQ();
    function makeMCQ(){
        return {
            question: "",
            options: new Array(4),
            correctOption: null
        };
    }
    return (
        <Card border="secondary" as="h2" className="p-2 text-center">
          <Card.Title as="h4" className="text-center my-2">Post your MCQ here</Card.Title>
          <Form.Control required  className="mb-2" defaultValue={test.mcq[test.current - 1].question}
                        as="textarea" rows={3} placeholder="Enter your Question here"
                        onChange={(e) => {
                            const newMCQ = { question: e.target.value,
                                             options: test.mcq[test.current - 1].options,
                                             correctOption: test.mcq[test.current - 1].correctOption };
                            setTest({...test, mcq: [...test.mcq.slice(0, test.current - 1), newMCQ,
                                                    ...test.mcq.slice(test.current)]});
                            console.log([...test.mcq.slice(0, test.current - 1), newMCQ,
                                         ...test.mcq.slice(test.current)]);
                        }} />
          
          <Col lg={{span: 6, offset: 3}} className="mb-2">
            <Form.Control required  placeholder="Enter option 1" defaultValue={test.mcq[test.current - 1].options[0]}/>
          </Col>
          <Col lg={{span: 6, offset: 3}} className="mb-2">
            <Form.Control required  placeholder="Enter option 2" defaultValue={test.mcq[test.current - 1].options[1]}/>
          </Col>
          <Col lg={{span: 6, offset: 3}} className="mb-2">
            <Form.Control required  placeholder="Enter option 3" defaultValue={test.mcq[test.current - 1].options[2]}/>
          </Col>
          <Col lg={{span: 6, offset: 3}} className="mb-4">
            <Form.Control required  placeholder="Enter option 4" defaultValue={test.mcq[test.current - 1].options[3]}/>
          </Col>
          <Col sm={4} className="mb-4">
            <Form.Control required  placeholder="Correct Option" />
          </Col>
          <Row>
            <Col>
              { test.current }/{ test.size }
            </Col>
            <Col md={4} lg={3}>
              <Row>
                <Col>
                  <Button onClick={() => {
                      if (test.current > 1){
                          setTest({...test, current: test.current - 1});
                      }
                  }}>Previous</Button>
                </Col>
                <Col>
                  <Button onClick={() => {
                      if (test.current <= test.mcq.length){
                          setTest({...test, current: test.current + 1});
                      } else {
                          setTest({...test, current: test.current + 1, mcq: [...test.mcq, makeMCQ()]});
                      }
                  }}>Next</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
    );
};

export default TestCards;
