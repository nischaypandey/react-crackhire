import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import BlogNavBar from './BlogNavBar';
import Footer from '../Footer';

const BlogView = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12}>
              <BlogNavBar />
            </Col>
            <Col sm={12} className="position-relative bg-info">
              <Image src={props.blog.image} fluid className="d-block mx-auto my-2 position-relative"/>
              <Button variant="outline-dark" size="lg" className="position-absolute"
                      style={{top: 0, right: 0}}>
                {props.blog.title}
              </Button>
            </Col>
            <Col sm={12} className="mb-2">
              <Card border="secondary" className="shadow-sm p-2 my-2">
                <Card.Body>
                  <Card.Subtitle>{props.blog.subtitle}</Card.Subtitle>
                  <Card.Text>{props.blog.body}</Card.Text>
                  <div className="d-flex justify-content-end">
                    <LinkContainer to="/blog/share/:id">
                      <Button variant="success">share</Button>
                    </LinkContainer>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12}>
              <div>By {props.blog.author}</div>
              <p>{props.blog.metadescription}</p>
            </Col>
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
              <Footer />
            </Col>
          </Row>
        </Container>
    );
};

export default BlogView;
