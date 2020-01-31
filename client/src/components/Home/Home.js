import React, { Fragment } from 'react';
import Logo from './../../logo.svg';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
    return (
        <Container>
          <Row>
            <Col sm={12} md={8} lg={6} className="mx-auto">
              <Card className="p-2 mx-2 my-1">
                <Card.Img className="img-fluid p-3" src={Logo}/>
                <hr />
                <Card.Body>
                  <Card.Title as={'h2'} className="text-center font-weight-lighter">
                    You want to
                  </Card.Title>
                  <Card.Body>
                    <Row>
                      <Col sm={12}>
                        <Button variant="primary" className="text-capilalize mb-1" block>
                          Post a Job
                        </Button>
                      </Col>
                      <Col sm={12}>
                        <Button variant="primary" className="text-capitalize" block>
                          Find a Job
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default Home;
