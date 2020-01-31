import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Button, Image, Form, Card, ProgressBar, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import EmployerDetailsNavBar from './EmployerDetailsNavBar';

const AccountDetails = props => {
    return (
        <Card className="shadow-sm">
          <Card.Body>
            <h3>Account Details</h3>
            <p>Credits Left : <span>{props.credits}</span></p>
            <p>CV Access Left : <span>{props.cv}</span></p>
            <p>Active Job Access Left : <span>{props.activejob}</span></p>
            <p>Job Boost Left : <span>{props.boost}</span></p>
          </Card.Body>
        </Card>
    );
};

const PersonalDetails = props => {
    return (
        <Card className="shadow-sm">
          <Card.Body>
            <h3>
              Personal Details
            </h3>
            <p>Name: <span>{props.name}</span></p>
            <p>Email Address: <span>{props.email}</span></p>
            <p>Password: <span>{props.password}</span></p>
            <p>Company Name: <span>{props.companyName}</span></p>
            <p>Company Website: <span>{props.companyWebsite}</span></p>
            <Row>
              <Col sm={6} md={4} lg={3}>
                Company Logo:
              </Col>
              <Col sm={6} md={4} lg={3}>
                <Image src={props.companyLogo} fluid thumbnail/>
              </Col>
            </Row>
            <p>Location: <span>{props.location}</span></p>
          </Card.Body>
        </Card>
    );
};

const Plan = props => {
    return(
        <Card variant="primary">
          <Card.Header className="text-center bg-primary text-white">
            <h3>{props.plan.name}</h3>
            {props.plan.price}
          </Card.Header>
          <Card.Body>
            <ListGroup className="mb-3" variant="flush">
              {props.plan.items.map(item => <ListGroup.Item>{item}</ListGroup.Item>)}
            </ListGroup>
            <Button block>Buy Now</Button>
          </Card.Body>
        </Card>
    );
};

const Plans = props => {
    return (
        <div className="p-2 my-2">
          <Card className="mb-2">
            <Card.Body>
              <h4>Buy Credits</h4>
              <Col sm={10} className="mx-auto mb-2">
                <ProgressBar now={props.plans.credits}/>
              </Col>
              <div className="d-flex justify-content-around mb-4">
                <Button>${props.price}</Button>
                <Button>Buy Now</Button>
              </div>
              <Row>
                <Col className="mb-2">
                  <Plan plan={{name: "Basic Plan", price: "60$/week",
                               items: ["One", "Two", "Three"]}}/>
                </Col>
                <Col className="mb-2">
                  <Plan plan={{name: "Basic Plan", price: "60$/week",
                               items: ["One", "Two", "Three"]}}/>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="bg-primary text-white text-center">CV Access Plan</Card.Header>
            <Card.Body>
              <Row>
                <Col className="mb-2">
                  <Plan plan={{name: "Basic Plan", price: "60$/week",
                               items: ["One", "Two", "Three"]}}/>
                </Col>
                <Col className="mb-2">
                  <Plan plan={{name: "Basic Plan", price: "60$/week",
                               items: ["One", "Two", "Three"]}}/>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
    );
};

const EmployerDetails = (props) => {
    useEffect(/* ajax call */);
    const [details, setdetails] = useState({
        name: "",
        email: "",
        password: "",
        companyName: "",
        companyWebsite: "",
        companyLogo: "",
        location: ""
    });
    return (
        <Container fluid className="border">
          <Row>
            <Col sm={12} className="mb-2">
              <EmployerDetailsNavBar />
            </Col>
            <Col sm={12}>
              <Card>
                <Container fluid>
                  <Row>
                    <Col md={4} className="my-2">
                      <Image src="/employer/:id/companyLogo" fluid roundedCircle/>
                    </Col>
                    <Col md={8} className="my-2">
                      <PersonalDetails {...details}/>
                    </Col>
                    <Col md={4} className="mb-2">
                      <Card className="shadow-sm">
                        <Card.Body>
                          ..............................................
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={8} className="mb-2">
                      <AccountDetails credits={props.employer.credits}
                                      cv={props.employer.cv} activejob={props.employer.activejob}
                                      boost={props.employer.boost}/>
                    </Col>
                    <Col md={8} className="mb-2 mx-auto">
                      <Plans />
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default EmployerDetails;
