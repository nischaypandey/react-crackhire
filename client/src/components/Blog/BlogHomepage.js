import React, { Fragment } from 'react';
import BlogNavBar from './BlogNavBar';
import BlogThumbnail from './BlogThumbnail';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Footer from '../Footer';

const BlogSection = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12} className="my-3">
              <h4 className="d-inline mr-2 text-primary">
                {props.section.title}({props.section.count})</h4>
              <LinkContainer to={props.section.href} className="text-secondary">
                <a>See All</a>
              </LinkContainer>
            </Col>
            <Col sm={12}>
              <Row>
                {props.section.blogs.length > 3 ?
                 props.section.blogs.slice(0, 3).map(blog =>
                                                     <Col sm={12} md={6} lg={4} className="mb-2">
                                                       <BlogThumbnail blog={blog}/>
                                                     </Col>):
                 props.section.blogs.map(blog =>
                                         <Col sm={12} md={6} lg={4} className="mb-2">
                                           <BlogThumbnail blog={blog}/>
                                         </Col>)}
              </Row>
            </Col>
          </Row>
        </Container>
    );
};

const BlogSections = props => {
    return (
        <Fragment>
          {props.sections.map(section => <Col sm={12}>
                                         <BlogSection section={section}/>
                                       </Col>)}
        </Fragment>
    );
};

const BlogHomepage = props => {
    return (
        <Container fluid>
          <Row>
            <Col sm={12}>
              <BlogNavBar />
            </Col>
            <Col sm={12}>
            </Col>
            <Col sm={12}>
              <Row>
              </Row>
            </Col>
            <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} className="mx-auto mb-2">
              <Footer />
            </Col>
          </Row>
        </Container>
    );
};

export {BlogSection, BlogSections, BlogThumbnail};
export default BlogHomepage;
