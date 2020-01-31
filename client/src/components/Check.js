import React from 'react';
import Form from 'react-bootstrap/Form';

const Check = (props) => {
    return (
        <Form.Group>
          <Form.Label as="h2" className="lead">{props.check.title}</Form.Label>
          <Form.Group>
            { props.options.map((option, idx) =>
                                     <Form.Check custom inline label={option.label}
                                                 type={option.type}
                                                 name={option.name}
                                                 id={option.name + "-option-" + String(idx)}
                                                 onChange={props.onChange} />
                                    )}
          </Form.Group>
        </Form.Group>
    );
};

export default Check;
