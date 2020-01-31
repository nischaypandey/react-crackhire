import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const InputGroupAppend = (props) => {
    return (
        <InputGroup className="mb-2">
          <Form.Control {...props.input} />
          <InputGroup.Append className="bg-blue px-3 rounded text-white d-flex align-items-center">
            <i className={ props.icon }></i>
          </InputGroup.Append>
        </InputGroup>
    );
};

const InputGroupPrepend = (props) => {
    return (
        <InputGroup className="mb-2">
          <InputGroup.Prepend className="bg-primary px-3 rounded text-white d-flex align-items-center">
            <i className={ props.icon }></i>
          </InputGroup.Prepend>
          <Form.Control {...props.input} />
        </InputGroup>
    );
};

export {
    InputGroupAppend,
    InputGroupPrepend
}
