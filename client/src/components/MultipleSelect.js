import React from 'react';
import Form from 'react-bootstrap/Form';

const MultipleSelect = (props) => {
    return (
        <Form.Group>
          <Form.Control as="select" multiple onChange={props.handleChange} id={props.id}>
            { props.options.map(option => <option value={option.toLowerCase()}>{option}</option>) }
          </Form.Control>
        </Form.Group>
    );
};

export default MultipleSelect;
