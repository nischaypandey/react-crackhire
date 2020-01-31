import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const ActionButton = props => {
    return (
        <Button variant={props.variant} onClick={props.handleClick}>
          {props.text}
        </Button>
    );
};

const JobSeekerCard = props => {
    return (
        <Card className="shadow-sm">
          <Card.Body>
            <div className="text-capitalize mb-1">
              Name: {props.jobseeker.name}
            </div>
            <div className="text-capitalize mb-1">
              KeySkills: <div className="d-inline">
                 {props.jobseeker.keyskills
                  .map(skill => <span className="mx-1 text-capitalize btn btn-primary btn-sm">
                                        {skill}</span>)}
               </div>
            </div>
            <div className="text-capitalize mb-1">
              Experience: {props.jobseeker.experience}
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-end">
              {props.buttons.map(button => <ActionButton variant={button.variant} text={button.text}
                                                         handleClick={button.handleClick} />)}
            </div>
          </Card.Footer>
        </Card>
    );
};


const Count = props => {
    return (
        <Container fluid as={Button} variant={props.variant}>
          <Row>
            <Col>
              <Badge variant={props.variant} className="px-3"
                     style={{border: '3px solid white'}}><h2>{props.count}</h2></Badge>
            </Col>
            <Col>
              <span>{props.text}</span>
            </Col>
          </Row>
        </Container>
    );
};

const ShortlistResume = props => {
    return (
        <Container fluid>
          <Row noGutters>
            <Col lg={3}>
              <Container>
                <Row>
                  <Col lg={12} sm={6}>
                    <Count variant="secondary" text="Pending applications" count="3"/>
                  </Col>
                  <Col lg={12} sm={6}>
                    <Count variant="warning" text="Shortlisted Candidate/s" count="3"/>
                  </Col>
                  <Col lg={12} sm={6}>
                    <Count variant="success" text="Selected Candidate/s" count="3"/>
                  </Col>
                  <Col lg={12} sm={6}>
                    <Count variant="danger" text="Rejected Candidate/s" count="3"/>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={9}>
              <Row>
                <Col sm={12} className="my-3">
                  Resume
                </Col>
                <Col className="mb-1"sm={12} style={{position: 'absolute', bottom: 0}}>
                  <div className="d-flex justify-content-end">
                    <Button variant="danger">Reject</Button>
                    <Button className="ml-1" variant="success">Hire</Button>
                    <Button className="ml-1" variant="info">Shortlist</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
};

const ShortlistDashboard = props => {
    const [applied, setapplied] = useState({
        pending: ["da", "ddf"], // ajax call
        shortlisted: [],
        selected: [],
        rejected: [],
        current: 0
    });
    function addto(candidate, to){
        setapplied({...applied, pending: [...applied.pending.slice(0, applied.current),
                                          ...applied.pending.slice(applied.current + 1)],
                    to: [...eval("applied." + to), candidate]});
        setapplied({...applied, current: applied.current + 1});
    }
    function addtoselected(candidate){
        addto(candidate, "selected");
    }
    function addtoshortlisted(candidate){
        addto(candidate, "shortlisted");
    }
    function addtorejected(candidate){
        addto(candidate, "rejected");
    }
    return (
        <Container fluid>
          <Row noGutters>
            <Col sm={12}>
              <Row>
                <Col lg={3} sm={12} md={6}>
                  <Count variant="secondary" text="Pending applications" count="3"/>
                </Col>
                <Col lg={3} sm={12} md={6}>
                  <Count variant="warning" text="Shortlisted Candidate/s" count="3"/>
                </Col>
                <Col lg={3} sm={12} md={6}>
                  <Count variant="success" text="Selected Candidate/s" count="3"/>
                </Col>
                <Col lg={3} sm={12} md={6}>
                  <Count variant="danger" text="Rejected Candidate/s" count="3"/>
                </Col>
              </Row>
            </Col>
            <Col>
              <h4 className="my-2">Employee Details</h4>
              <JobSeekerCard jobseeker={{name: "Suraj", keyskills: []}} buttons={[{variant: "success", text: "Hire", handleClick: {addto}}]}/>
            </Col>
          </Row>
        </Container>
    );
};

export default ShortlistDashboard;
