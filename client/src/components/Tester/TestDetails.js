import React from 'react';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import TesterNavBar from './TesterNavBar';

const TestDetails = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12}>
              <TesterNavBar />
            </Col>
            <Col sm={12} className="my-2">
              <Image src="http://teespring-storecontent.s3.amazonaws.com/oH48W9OolEiG3_iE40F0tw_store_banner_image?1478560026161"
                     fluid className="d-block mx-auto"/>
            </Col>
            <Col sm={12} md={8} lg={9}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title as="h2">{props.test.companyName}</Card.Title>
                  <Card.Subtitle>{props.test.position}</Card.Subtitle>
                  <div className="d-flex align-items-stretch my-2">
                    <Button variant="light">
                      <i className="fa fa-map-marker-alt mr-2"></i>Online
                    </Button>
                    {props.test.isLive? <Button variant="success" className="ml-5">Live</Button> : null}
                  </div>
                  <Row className="mb-2">
                    <Col sm={{span: 3, order: 1}}
                         xs={{span: 6, order: 1}} className="font-weight-bold">Type</Col>
                    <Col sm={{span: 3, order: 2}}
                         xs={{span: 6, order: 3}} className="font-weight-bold">Positions</Col>
                    <Col sm={{span: 3, order: 3}}
                         xs={{span: 6, order: 5}} className="font-weight-bold">Experience</Col>
                    <Col sm={{span: 3, order: 4}}
                         xs={{span: 6, order: 7}} className="font-weight-bold">Package</Col>
                    <Col sm={{span: 3, order: 5}}
                         xs={{span: 6, order: 2}} className="text-primary">{props.test.type}</Col>
                    <Col sm={{span: 3, order: 6}}
                         xs={{span: 6, order: 4}} className="text-primary">{props.test.position}</Col>
                    <Col sm={{span: 3, order: 7}}
                         xs={{span: 6, order: 6}} className="text-primary">{props.test.experience}</Col>
                    <Col sm={{order: 3, order: 8}}
                         xs={{span: 6, order: 8}} className="text-primary">{props.test.package}</Col>
                  </Row>
                  <div className="mb-2">
                    <h2>About the Exam</h2>
                    <ListGroup>
                      {props.test.abouts.map(about => <ListGroup.Item>about</ListGroup.Item>)}
                    </ListGroup>
                  </div>
                  <div>
                    <h2>Exam Pattern</h2>
                    <ListGroup>
                      {props.test.patterns.map(pattern => <ListGroup.Item>pattern</ListGroup.Item>)}
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Card>
                <Card.Header className="text-center font-weight-bold">
                  Name of the Exam
                </Card.Header>
                <Card.Body>
                  <Row className="mb-2">
                    <Col sm={6}>Starts at:</Col>
                    <Col sm={6}>{props.test.startsAt}</Col>
                    <Col sm={6}>Ends at:</Col>
                    <Col sm={6}>{props.test.endsAt}</Col>
                    <Col sm={6}>Duration:</Col>
                    <Col sm={6}>{props.test.duration}</Col>
                  </Row>
                  <Button block variant="success">Start</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default TestDetails;
