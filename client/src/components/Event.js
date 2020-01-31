import React from 'react';
import Card from 'react-bootstrap/Card';

const Event = (props) => {
    return (
        <Card border="primary">
          <Card.Header className="text-center bg-primary text-white" as="h4">
            {props.event.title}
            <br />
            <small>{props.event.date}</small>
          </Card.Header>
          <Card.Body>
            <p>{props.event.info}</p>
          </Card.Body>
        </Card>
    );
};

export default Event;
