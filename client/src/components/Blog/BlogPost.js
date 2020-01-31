import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import BlogNavBar from './BlogNavBar';
import Footer from '../Footer';

const BlogPost = props => {
    function handleSubmit(e){
    }
    return (
        <Container fluid>
          <Row>
            <Col sm={12}>
              <BlogNavBar />
            </Col>
            <Col sm={12}>
              <h2 className="text-center my-2 text-primary">Write for CrackHire</h2>
            </Col>
            <Col sm={12} md={{span: 8, offset: 2}} className="mb-2">
              <Card className="shadow-sm">
                <Card.Body>
                  <ul>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary text-center font-weight-bold mb-3" as="h2">
                    Complete the form to post your Blog
                  </Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={2}>Title of the Article</Form.Label>
                      <Col sm={10}>
                        <Form.Control />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm={2}>Content of the Article</Form.Label>
                      <Col sm={10}>
                        <Form.Control as="textarea" rows="5" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm={2}>Social/Website/Social Media URL</Form.Label>
                      <Col sm={10}>
                        <Form.Control />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm={2}>Any Additional Comment</Form.Label>
                      <Col sm={10}>
                        <Form.Control />
                      </Col>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button type="submit">Submit</Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
              <Footer />
            </Col>
          </Row>
        </Container>
    );
};


export default BlogPost;
