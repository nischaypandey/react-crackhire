import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ApplySuccess = () => {
    return (
        <Container fluid className="bg-success text-white py-2">
          <Row>
            <Col md={{span: 1, offset: 1 }}>
              <i className="fas fa-check fa-3x d-sm-none d-md-block"></i>
            </Col>
            <Col>
              <Row>
                <Col sm={12}>
                  <h4 className="text-wrap">You have successfully applied for the job</h4>
                </Col>
                <Col>
                  Continue Applying...
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
};

export default ApplySuccess;
