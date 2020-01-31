import React, { Component, Fragment } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Field = (props) => {
    return (
        <InputGroup className="mb-2">
          <Form.Control {...props.field.input} />
          <InputGroup.Append className="bg-blue px-3 rounded text-white d-flex align-items-center">
            { props.field.icon ? <i className={ props.field.icon }></i> : '' }
          </InputGroup.Append>
        </InputGroup>
    );
};

export default Field;

