import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TestCard = (props) => {
    const [test, setTest] = useState({
        question: "",
        options: new Array(4),
        correctOption: null
    });
    function handleClick(){
        props.handleSave(test);
    }
    return (
        <Card border="secondary" as="h2" className="p-2 text-center">
          <Card.Title as="h4" className="text-center my-2">Post your MCQ here</Card.Title>
          <h4>{ props.no }</h4>
          <Form.Control required  className="mb-2" 
                        as="textarea" rows={3} placeholder="Enter your Question here"
        onChange={(e) => {
            setTest({...test, question: e.target.value});
        }} />
          
          <Col lg={6} md={8} sm={10} className="mb-2 mx-auto">
            <Form.Control required  placeholder="Enter option 1"
                          onChange={(e) => {
                              const options = [e.target.value, ...test.options.slice(1)];
                              setTest({...test, options});
                          }}/>
          </Col>
          <Col lg={6} md={8} sm={10} className="mb-2 mx-auto">
            <Form.Control required  placeholder="Enter option 2"
                          onChange={(e) => {
                              const options = [...test.options.slice(0, 1), e.target.value,
                                               ...test.options.slice(2)];
                              setTest({...test, options});
                          }}/>
          </Col>
          <Col lg={6} md={8} sm={10} className="mb-2 mx-auto">
            <Form.Control required  placeholder="Enter option 3"
                          onChange={(e) => {
                              const options = [...test.options.slice(0, 2), e.target.value,
                                               ...test.options.slice(3)];
                              setTest({...test, options});
                          }}/>
          </Col>
          <Col lg={6} md={8} sm={10} className="mb-4 mx-auto">
            <Form.Control required  placeholder="Enter option 4"
            onChange={(e) => {
                const options = [...test.options.slice(0,3), e.target.value];
                              setTest({...test, options});
                          }}/>
          </Col>
          <Col sm={4} className="mb-2 mx-auto">
            <Form.Control required  placeholder="Correct Option" type="number" min="1" max="4"
                          onChange={e => setTest({...test, correctOption: parseInt(e.target.value)}) }/>
          </Col>
          <Col sm={12} className="mb-4">
            <Button onClick={handleClick}>Save</Button>
          </Col>
        </Card>
    );
};

const TestCarousels = (props) => {
    const [testSeries, setTest] = useState({
        test: new Array(props.size)
    });
    function handleSubmit(event){
        props.handleSubmit(testSeries);
    }
    let array = [];
    for (let i = 1; i <= props.size; i++){
        array.push(i);
    }
    console.log(array);
    return (
        <Form onSubmit={handleSubmit}>
          <Carousel interval={300000}>
            {
                array.map(n =>{
                    console.log(n);
                    return (
                        <Carousel.Item>
                          <div sm={12} md={10} lg={8}>
                            <TestCard
                              no={n}
                              handleSave={(e) => setTest({test: [...testSeries.test.slice(0, n - 1),
                                                                 e,
                                                                 ...testSeries.test.slice(n)
                                                                ]})} />
                          </div>
                        </Carousel.Item>);})
            }
          </Carousel>
          <Col sm={12} md={3} lg={2} className="mx-auto px-0">
            <Button block type="submit">Submit</Button>
          </Col>
        </Form>
    );
};

export default TestCarousels;
