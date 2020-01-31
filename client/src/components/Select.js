import React from 'react';
import Form from 'react-bootstrap/Form';

const Select = (props) => {
    return (
        <Form.Group className="m-0">
          <Form.Control as="select" onChange={props.onChange} className="m-0">
            { props.options.map(option => <option key={option} value={option.toLowerCase()}>{option}</option>) }
          </Form.Control>
        </Form.Group>
    );
};

export default Select;
