import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const HowWorks = (props) => {
    return (
        <Fragment>
          <Card border="light">
            <Col sm={12}>
              <div className="d-flex justify-content-center">
              <Button size="lg" variant="outline-primary">How CrackHire Works</Button>
              </div>
            </Col>
            <Col sm={12} className="mx-2 my-1">
              <Card border="primary">
                <Row>
                  <Col className="m-1">
                    <Card border="primary">
                      <Jumbotron className="bg-primary text-white">
                        <Container>
                          <h1 className="text-center">Video</h1>
                        </Container>
                      </Jumbotron>
                    </Card>
                  </Col>
                  <Col className="m-1">
                    <h2 className="text-center my-2">For Employer</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Card>
        </Fragment>
    );
};

export default HowWorks;
