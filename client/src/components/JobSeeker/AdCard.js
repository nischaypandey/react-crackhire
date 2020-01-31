import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Icon from './../Icon';

const Rating = (props) => {
    return (
        <div className="px-1">
          <p>{props.star} <i className="fa fa-star text-warning"></i></p>
        </div>
    );
};


// {adcard: {org, pos, posted, descrip, icon, duration, loc, pay, keyskill}}
const AdCard = (props) => {
    function handleApply(){
        // ajax call
    }
    return (
        <Card border="primary">
          <Card.Title as="h4" className="font-weight-bold mt-3 ml-3">
            {props.adcard.company}
          </Card.Title>
          <Card.Body>
            <Container fluid={true}>
              <Row className="d-flex align-items-start">
                <Col sm={10}>
                  <Row className="lead">
                    <Col className="d-flex justify-content-start m-0">
                      <div className="font-weight-bold">{props.adcard.pos}</div> 
                      <div className="mx-3"><Rating star="3"/></div>
                      <div>{props.adcard.datePosted}</div>
                    </Col>
                  </Row>
                  <Row>
                    <p>{props.adcard.description.slice(0, 75) + "..."}</p>
                  </Row>
                </Col>
                <Col sm={2}>
                  <img className="img-fluid d-none d-sm-block" 
                       src={props.adcard.companyLogo}/>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col className="d-flex flex-row justify-content-between align-items-center mb-1" sm={12}
                   md={10}>
                <Icon icon={{icon: "fas fa-suitcase" ,text: props.adcard.duration}} />
                <Icon icon={{icon: "fas fa-map-marker-alt" ,text: props.adcard.location}} />
                <Icon icon={{icon: "fas fa-money-check" ,text: props.adcard.pay}} />
                <Icon icon={{icon: "fas fa-pen" ,text: props.adcard.keyskills}} />
              </Col>
              <Col className="d-flex flex-row justify-content-end" sm={12} md={2}>
                <Button block variant="primary" onClick={handleApply}>Apply</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
    );
};

export default AdCard;
export { Rating };
