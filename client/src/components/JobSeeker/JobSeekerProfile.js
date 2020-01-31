import React, { Fragment } from 'react';
import JobSeekerProfileLinks from './JobSeekerProfileLinks';
import NavBar from '../NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../Profile';
import PremiumPlans from '../PremiumPlans';
import Applied from './Applied';
import Resume from './Resume';
import { connect } from 'react-redux';

const JobSeekerProfile = (props) => {
    return (
        <Fragment>
          <NavBar>
            <JobSeekerProfileLinks />
          </NavBar>
          <Container fluid>
            <Row>
              <Col md={4} lg={3} className="my-1">
                <Profile profile={props.details} />
              </Col>
              <Col md={8} lg={9} className="my-1">
                <Resume ></Resume>
              </Col>
              <Col md={4} lg={3} className="my-1">
                <div/> {/*<PremiumPlans />*/}
              </Col>
              <Col md={8} lg={9} className="my-1">
                <Applied />
              </Col>
            </Row>
          </Container>
        </Fragment>
    );
};

function mapStateToProps(state){
    const { jobSeekerReducers } = state;
    return {
        details: jobSeekerReducers.jobSeeker.details
    };
}

export default connect(mapStateToProps)(JobSeekerProfile);
