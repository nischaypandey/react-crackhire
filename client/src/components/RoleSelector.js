import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

import { connect } from 'react-redux';

import { ROLE_CHANGED } from '../redux/actions/actions';
import roleReducer from '../redux/reducers/generalReducer';

const roles = [{role: "jobseeker", icon: "fas p-1 fa-3x fa-user-graduate"},
               {role: "employer", icon: "fas p-1 fa-3x fa-building"},
               {role: "interviewer", icon: "fas p-1 fa-3x fa-calendar-alt"},
               {role: "tester", icon: "fas p-1 fa-3x fa-spell-check"}];

const Role = props => {
    return (
        <Nav.Item>
          <Nav.Link href={"/" + props.role } onClick={() => props.setRole(props.role)}
                    className="m-1 d-flex flex-column align-items-center" as="div">
            <i className={props.icon}></i>
            <p className="text-capitalize">{props.role}</p>
          </Nav.Link>
        </Nav.Item>
    );
};

const HOCRole = connect(null, mapDispatchToProps)(Role);

const RoleSelector = (props) => {
    return (
        <Card border="white">
          <Nav variant="pills" defaultActiveKey="/jobseeker"
               className="d-flex justify-content-around">
            {roles.map(role => <HOCRole {...role} />)}
          </Nav>
          { props.children }
        </Card>
    );
};

function mapStateToProps(state){
    const { general } = state;
    return {
        role: general.role
    };
}

function mapDispatchToProps(dispatch){
    return {
        setRole: e => dispatch({type: ROLE_CHANGED, role: e})
    };
}

export default connect(mapStateToProps)(RoleSelector);
