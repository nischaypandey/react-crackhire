import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Bar from '../Bar';
import EmployerDashboardNavBar from './EmployerDashboardNavBar';
import AppliedJobSeekers from './AppliedJobSeekers';

const EmployerDashboard = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12} className="mb-2">
              <EmployerDashboardNavBar />
            </Col>
            <Col sm={12} className="mb-2">
              <Bar />
            </Col>
            <Col sm={12}>
              <AppliedJobSeekers />
            </Col>
          </Row>
        </Container>
    );
};

export default EmployerDashboard;
