import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import JobSeekerProfile from './components/JobSeeker/JobSeekerProfile';
import EmployerProfileNavBar from './components/Employer/EmployerProfileNavBar';
import EmployerProfile from './components/Employer/EmployerProfile';
import Interview from './components/Interviewer/InterviewerForm';
import TesterProfilePage from './components/Tester/TesterProfilePage';
import ShortlistDashboard from './components/Employer/ShortlistDashboard';
import SignIn from './components/SignInPage';
import EmployerDetails from './components/Employer/Details';
import SignUpPage from './components/SignUpPage';
import LandingPageNavBar from './components/LandingPage/LandingPageNavBar';
import JobSeekerDashboard from './components/JobSeeker/JobSeekerDashboard';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import EmployerDashboard from './components/Employer/EmployerDashboard';
import BlogNavBar from './components/Blog/BlogNavBar';
import BlogHomepage from './components/Blog/BlogHomepage';
import VerifyOTPPage from './components/VerifyOTPPage';
import OTPVerified from './components/OTPVerified';
import Test from './components/JobSeeker/Test';
import BlogView from './components/Blog/BlogView';
import BlogPost from './components/Blog/BlogPost';
import BlogThumbnail from './components/Blog/BlogThumbnail';
import TestDetails from './components/Tester/TestDetails';
import { BlogSections } from './components/Blog/BlogHomepage';
import BlogSectionPage from './components/Blog/BlogSectionPage';
import TesterNavBar from './components/Tester/TesterNavBar';
import JobPostNavBar from './components/Employer/JobPostNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const test = (props) => {
    return (
        <Router>
          <Provider store={store}>
            <Container fluid>
              <Row>
                <Col sm={12}>
                  <Route path="/jobseekerdashboard" component={JobSeekerDashboard}/>
                  <Route path="/signin" component={SignIn}/>
                  <Route path="/signup" component={SignUpPage}/>
                  <Route path="/shortlist" component={ShortlistDashboard}/>
                  <Route path="/interview" component={Interview}/>
                  <Route path="/otpverified" component={OTPVerified}/>
                  <Route path="/otp" component={VerifyOTPPage}/>
                  <Route path="/details" component={EmployerDetails}/>
                  <Route path="/blog" component={BlogView}/>
                  <Route path="/blogpost" component={BlogPost}/>
                  <Route path="/test" component={TesterNavBar}/>
                  <Route path="/testdetails" component={TestDetails}/>
                  <Route path="/empdashboard" component={EmployerDashboard}/>
                  <Route path="/profilenavbar" component={EmployerProfile}/>
                  <Route path="/test" component={Test}/>
                </Col>
              </Row>
            </Container>
          </Provider>
        </Router>
    );
};

export default test;
