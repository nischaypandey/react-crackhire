import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const Plan = (props) => {
    return (
        <Card>
          <Card.Header className="bg-primary text-white font-weight-bold text-center">
            { props.plan.name }
            <br />
            { props.plan.cost }
          </Card.Header>
          <Card.Body>
            <p>{props.plan.info}</p>
            <Button block>Buy Plan</Button>
          </Card.Body>
        </Card>
    );
};

const PremiumPlans = (props) => {
    return (
        <Carousel>
          { props.plans.map(plan =>
                            <Carousel.Item>
                              <div className="px-3 mb-3">
                                <Plan plan={plan}/>
                              </div>
                            </Carousel.Item>
                           )}
        </Carousel>
    );
};

export default PremiumPlans;
