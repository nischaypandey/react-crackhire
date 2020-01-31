import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Rating } from './AdCard';

const AdDetails = (props) => {
    return (
        <Container>
          <Row>
            <Col>
              <Row>
                <Col sm={10}>
                  <h3>{ props.ad.organization }</h3>
                  <div className="d-flex justify-content-start m-0">
                    <div className="font-weight-bold">{props.ad.position}</div> 
                    <div className="mx-3"><Rating star={props.ad.rating}/></div>
                    <div>{props.ad.posted}</div>
                  </div>
                </Col>
                <Col sm={2}>
                  <img className="img-fluid d-none d-sm-block"
                       src={props.ad.orgImage} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
};

export default AdDetails;
