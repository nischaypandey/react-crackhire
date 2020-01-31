import React, { useState } from 'react';
import { InputGroupPrepend } from './InputGroupAP';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';

import { AD_QUERIED, CATEGORY_CHANGED } from '../redux/actions/actions';
import { barReducer, categoryReducer } from '../redux/reducers/jobSeekerReducer';

import Select from './Select';
import NavPills from './NavPills';

const Bar = (props) => {
    const [query, setquery] = useState (
        {
            search: "",
            location: "",
            experience: "beginner",
        });
    const navPills = [
        { href:"/all", text: "All", value: "all" },
        { href:"/job", text: "Jobs", value: "job" },
        { href:"/internship", text: "Internships", value: "internship" },
        { href:"/walkin", text: "WalkIns", value: "walkin" },
    ];
    function handleChange(bar){
        setquery(bar);
        props.handleBar(bar);
    }
    return (
        <Row>
          <Col sm={12} className="mb-1">
            <Nav variant="pills" defaultActiveKey={0}>

              { navPills.map((item, idx) =>
                             <Nav.Item key={"item-" + String(idx)}>
                               <Nav.Link eventKey={String(idx)} href={item.link}
                                         onClick={() => props.handleCategory(item.value)}>
                                 {item.text}
                               </Nav.Link>
                             </Nav.Item>
                            ) }
            </Nav>
          </Col>
          <Col md={5} sm={12} className="mb-1">
            <InputGroup>
              <InputGroup.Prepend className="bg-primary px-3 rounded text-white d-flex align-items-center"> 
                <i className="fa fa-search"></i>
              </InputGroup.Prepend>
              <Form.Control placeholder="Search by Skill, Company or Job"
                            onChange={(e) => setquery({...query, search: e.target.value})} />
            </InputGroup>
          </Col>
          <Col md={3} sm={12} className="mb-1">
            <InputGroup>
              <InputGroup.Prepend className="bg-primary px-3 rounded text-white d-flex align-items-center"> 
                <i className="fa fa-map-marker-alt"></i>
              </InputGroup.Prepend>
              <Form.Control placeholder="Location" 
                            onChange={(e) => setquery({...query, location: e.target.value})}/>
            </InputGroup>
          </Col>
          <Col md={2} sm={12} className="mb-1">
            <Select options={["Beginner", "Intermediate", "Expert"]}
                    onChange={(e) => setquery({...query, experience: e.target.value})}/>
          </Col>
          <Col md={2} sm={12}>
            <Button block variant="primary" onClick={() => props.handleBar(query)}>Search</Button>
          </Col>
        </Row>
    );
};

function mapStateToProps(state){
    return {
        query: state.query
    };
}

function mapDispatchToProps(dispatch){
    return {
        handleBar: e => dispatch({type: AD_QUERIED, bar: e}),
        handleCategory: e => dispatch({type: CATEGORY_CHANGED, category: e})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Bar);
