import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import EmployerProfileNavBar from './EmployerProfileNavBar';

const Profile = props => {
    return (
        <Card>
          <Card.Body>
            <Image src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" fluid roundedCircle style={{width: 300}} className="mx-auto"/>
            <div><i className="fas fa-pencil-alt"></i></div>
          </Card.Body>
        </Card>
    );
};

const EmployerProfile = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12} className="mb-2">
              <EmployerProfileNavBar />
            </Col>
            <Col className="mx-auto" sm={4}>
              <Profile />
            </Col>
          </Row>
        </Container>
    );
};

export default EmployerProfile;
