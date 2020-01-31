import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MultipleSelect from '../MultipleSelect';

const Filters = (props) => {
    const [filters, setfilters] = useState({
        skills: "",
        experience: ""
    });
    function multiplevalues(element){
        let arr = [];
        for (let i = 0; i < element.length; i++){
            if (element[i].selected){
                arr.push(element[i].value);
            }
        }
    }
    return (
        <Card className="px-2">
          <h3 className="text-center">Filters</h3>
          <Row>
            <Col sm={12}>
              <h5>Experience</h5>
              <MultipleSelect options={["0-1 years", "1-2 years", "2-3 years"]}
                              handleChange={e => multiplevalues}/>
            </Col>
            <Col sm={12}>
              <h5>Skills</h5>
              <MultipleSelect options={["C", "C++", "Oracle", "PHP"]} />
            </Col>
          </Row>
        </Card>
    );
};

export default Filters;
