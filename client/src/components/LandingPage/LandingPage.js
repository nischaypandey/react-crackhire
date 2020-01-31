import React, { Fragment } from 'react';
import { Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar';
import NavItems from './../NavItems';
import NavLinks from '../NavLinks';
import NavPills from './../NavPills';
import RoleSelector from '../RoleSelector';
import SignIn from '../SignIn';
import HowWorks from './../HowWorks';
import EventCards from '../EventCards';
import Bar from '../Bar';

const LandingPage = (props) => {
    const navItems = [
        { href: "/landing", text: "JobSearch" },
        { href: "/events", text: "Events" },
        { href: "/services", text: "Services" },
        { href: "/blogs", text: "Blogs" },
        { href: "/advertise", text: "Advertise" }
    ];
    const navPills = [
        { href:"/all", text: "All" },
        { href:"/job", text: "Jobs" },
        { href:"/internship", text: "Internships" },
        { href:"/walkin", text: "WalkIns" },
    ];
    return (
        <Fragment>
          <NavBar>
            <NavLinks items={navItems} />
          </NavBar>
          <Row>
            <Col sm={12}>
              <Bar />
            </Col>
            <Col className="mx-auto my-2" lg={6} md={9}>
              <RoleSelector>
                <SignIn />
              </RoleSelector>
            </Col>
            <Col sm={12}>
              <HowWorks />
            </Col>
            <Col sm={12} className="m-1" sm={12}>
              <div className="d-flex justify-content-center m-1">
                <Button variant="outline-primary" size="lg">Upcoming Events</Button>
              </div>
              <EventCards />
            </Col>
          </Row>
        </Fragment>
    );
};

export default LandingPage;
