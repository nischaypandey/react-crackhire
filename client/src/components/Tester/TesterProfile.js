import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Field = (props) => {
    return (
        <p>
          <span className="text-capitalize">{props.field}</span> : <span>{props.value}</span>
        </p>
    );
};

const TesterProfile = (props) => {
    const [details, setdetails] = useState({
        profile: {
            email: "testemail@email.com",
            phone: "1234567890",
            experience: "2 years"
        },
        account: {
            skills: "ReactJs, Redux",
            domain: "Personality, Aptitude",
            questions: "30",
            date: "24th Aug 2019",
            status: "Pending",
            credits: "20"
        }
    });
    return (
        <Container fluid>
            <Row>
              <Col sm={12} className="mb-2">
                <Card border="white" className="shadow-sm px-2 py-1">
                  <img src={/*details.profile.image*/"https://via.placeholder.com/300.png/09f/fff"} className="d-block mx-auto rounded-circle m-3 img-fluid"/>
                  { Object.keys(details.profile).map(key => <Field field={key}
                                                          value={details.profile[key]} />) }
                </Card>
              </Col>
              <Col sm={12}>
                <Card border="white" className="shadow-sm">
                  <Card.Header as="h4"
                               className="bg-primary text-white text-center">
                    Account Details
                  </Card.Header>
                  <Card.Body>
                    { Object.keys(details.account)
                      .map(key =>
                           <Field field={key}
                                  value={(key == "skills" || key == "domain" )?
                                         details.account[key].split(',')
                                         .map(a => <Button variant="light"
                                                           className="mx-1">{a}</Button>):
                                         details.account[key]} />) }
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
    );
};

export default TesterProfile;
