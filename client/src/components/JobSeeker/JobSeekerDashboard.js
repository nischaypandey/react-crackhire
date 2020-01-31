import React, { useState } from 'react';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import NavBar from '../NavBar';
import JobSeekerNavLinks from './JobSeekerNavLinks';
import Bar from '../Bar';
import Filters from './Filters';
import AdCard from './AdCard';
import Results from './Results';

function AppliedAlert(props){
    return (
        <Alert variant="success" dismissible show={props.show} onClose={props.onClose}>
          <Alert.Heading>
            <Row>
              <Col sm={3}>
                <i className="fas fa-check fa-2x d-sm-none d-md-block"></i>
              </Col>
              <Col sm={9}>
                <h3>You have successfully applied for the job</h3>
              </Col>
            </Row>
          </Alert.Heading>
          <p className="text-center">Continue Applying...</p>
        </Alert>
    );
}

const JobSeekerDashboard = (props) => {
    const [alert, setalert] = useState(false);
    function showAlert(){
        setalert(true);
    }
    return (
        <Container fluid>
          <Row>
            <Col sm={12} className="mb-1">
              <NavBar>
                <JobSeekerNavLinks />
              </NavBar>
            </Col>
            <Col sm={12}>
              <AppliedAlert onClose={() => setalert(false)} show={alert} />
            </Col>
            <Col sm={12}>
              <Bar />
            </Col>
            <Col sm={12} className="p-0">
              <Container fluid>
                <Row>
                  { alert ? null :
                    <Col sm={12} md={4} lg={2} className="my-1">
                      <Filters />
                    </Col>
                  }
                  <Col sm={12} md={alert? 12 : 8} lg={alert? 9 : 7} className="my-1">
                    <Results />
                  </Col>
                  <Col sm={12} md={12} lg={3} className="my-1">
                    <Container fluid className="p-0">
                      <Row>
                        <Col sm={12} className="mb-1">
                          <Card>
                            <Card.Body>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col sm={12}>
                          <Card>
                            <Card.Body>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
    );
};

export default JobSeekerDashboard;
