import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const BlogThumbnail = props => {
    const [like, setlike] = useState(false);
    return (
        <Card border="secondary" className="position-relative shadow-sm">
          <Card.Img src={props.blog.image} variant="top" as={Image} fluid thumbnail/>
          <Card.Body>
            <Button variant="white" onClick={() => setlike(!like)} className="position-absolute"
                    style={{top: 10, right: 10}}>
              <div className={like ? "text-danger" : "text-secondary"}>
                <i className="fas fa-heart fa-2x"></i>
              </div>
            </Button>
            <Card.Title>
              {props.blog.title}
            </Card.Title>
            <Card.Text>
              {props.blog.body.slice(0, 70) + "..."}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <LinkContainer to="/blog/:id">
                <a>Read More...</a>
              </LinkContainer>
              <LinkContainer to="/blog/:id/share">
                <a>Share</a>
              </LinkContainer>
            </div>
          </Card.Body>
        </Card>
    );
};

export default BlogThumbnail;
