import React from 'react';
import { BlogThumbnail } from './BlogHomepage';
import BlogNavBar from './BlogNavBar';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer';

const BlogSectionPage = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12}>
              <BlogNavBar />
            </Col>
            <Col sm={12} className="text-center my-2">
              <h2>{props.section.title}</h2>
              <small>{props.section.subtitle}</small>
            </Col>
            <Col sm={12}>
              <Row>
                {props.section.blogs.map(blog =>
                                         <Col sm={12} md={6} lg={4} className="mb-2">
                                           <BlogThumbnail blog={blog}/>
                                         </Col>)}
              </Row>
            </Col>
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} className="my-2">
              <Footer />
            </Col>
          </Row>
        </Container>
    );
};

export default BlogSectionPage;
