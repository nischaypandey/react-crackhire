import React, { useState, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Select from '../Select';

const JobPost = (props) => {
    const [form, setform] = useState({
        name: "",
        companyName: "",
        companyEmail: "",
        companySize: 0,
        jobTitle: "",
        location: "",
        jobType: "",
        salary: { from: 1000, to : 1000 },
        jobDescrip: "",
        skills: "",
        responsibilities: "",
        experience: "beginner",
        testSeries: "",
        skillset: "",
        examtime: "",
        interviewer: "no",
        interviewerProfile: null
    });
    return (
        <Card border="primary" className="px-2 py-1">
          <Form>
            <Card border="light" className="shadow-sm m-1 mb-3">
              <Card.Header className="mb-1">Personal Details</Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control required onChange={(e) => setform({...form, name: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control required onChange={(e) => setform({...form, companyName: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company Email</Form.Label>
                  <Form.Control required onChange={(e) => setform({...form, companyEmail: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company Size</Form.Label>
                  <Form.Control required type="number" minimum="1"
                                onChange={(e) => setform({...form, companySize: Number(e.target.value)})}/>
                </Form.Group>
              </Card.Body>
            </Card>
            <Card border="light" className="shadow-sm m-1 mb-3">
              <Card.Header className="mb-1">Job Details</Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control required onChange={(e) => setform({...form, jobTitle: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control required onChange={(e) => setform({...form, location: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type of Job</Form.Label>
                  <div>
                    <Form.Check required custom inline label="Full time(On Site)" type="radio"
                                name="jobType" id="jobtype-full" value="full"
                                onChange={e => {
                                    setform({...form, jobType:
                                             (e.target.checked ? e.target.value: form.jobType)});
                                }} />
                    <Form.Check required custom inline label="Part time(Work from Home)" type="radio"
                                id="jobtype-part" name="jobType" value="part"
                                        onChange={e => {
                                    setform({...form, jobType:
                                             (e.target.checked ? e.target.value: form.jobType)});
                                }} />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Salary Expected</Form.Label>
                  <Form.Row>
                    <Col sm={4}>
                      <Select options={[...Array(10).keys()].map(a => a + 1).map(a => String(a * 1000))}
                              onChange={e => setform({...form, salary: { from: Number(e.target.value), to: form.salary.to}})}/>
                    </Col>
                    <Col className="text-center" sm={2}>
                      to
                    </Col>
                    <Col sm={4}>
                      <Select options={[...Array(10).keys()].map(a => a + 1).map(a => String(a * 1000))}
                              onChange={e => setform({...form,
                                                 salary: { from: form.salary.from, to: Number(e.target.value)}})}/>
                      
                    </Col>
                    <Col className="text-center" sm={2}>
                      /year
                    </Col>
                    {form.salary.from > form.salary.to ? <Form.Text className="text-danger">From should be less than To salary</Form.Text> : ""}
                  </Form.Row>
                </Form.Group>
              </Card.Body>
            </Card>
            <Card border="light" className="shadow-sm m-1 mb-3">
              <Card.Header className="mb-1">About Job</Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control required onChange={e => setform({...form, jobDescrip: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Skills Required</Form.Label>
                  <Form.Control required onChange={e => setform({...form, skills: e.target.value.split(',')})}/>
                  <Form.Text>Seperated by ','</Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Responsibilities & Duties</Form.Label>
                  <Form.Control as="textarea" rows="5"
                                onChange={e => setform({...form, responsibilities: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Experience Required</Form.Label>
                  <Select options={["Beginner", "Intermediate", "Experienced"]}
                          onChange={e => setform({...form, experience: e.target.value})}/>
                </Form.Group>
              </Card.Body>
            </Card>
            <Card border="light" className="shadow-sm m-1 mb-3">
              <Card.Header>About Job</Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Label>
                    Do you want to use our test series exam for Selection process?
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Check required custom inline label="Yes" name="exam" value="yes" id="exam-yes"
                                type="radio"
                                onChange={e => {
                                    setform({...form, testSeries:
                                             (e.target.checked ? e.target.value: form.testSeries)});
                                }}
                    />
                    <Form.Check required custom inline label="No" name="exam" value="no" id="exam-no"
                                type="radio"
                                onChange={e => {
                                    setform({...form, testSeries:
                                             (e.target.checked ? e.target.value: form.testSeries)});
                                }}
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Skill Set Testing</Form.Label>
                  <Row>
                    <Col>
                      <Select options={["Personality", "Aptitude"]}
                      onChange={e => setform({...form, skillset: e.target.value})}/>
                    </Col>
                    <Col>
                      <a href="/sample">View sample questions</a>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Do you want to keep exam date fixed or let the candidates take it at their convenience?
                  </Form.Label>
                  <div>
                    <Form.Check required custom inline label="Yes, keep the exam date fixed"
                                name="exam-time" value="fixed" id="exam-fixed"
                                type="radio"
                                onChange={e => setform({...form, examtime:
                                                        (e.target.checked? e.target.value: form.examtime)})}
                    />
                    <Form.Check custom inline label="No, let the candidates take the exam at their convenience"
                                name="exam-time" value="free" id="exam-free"
                                type="radio"
                                onChange={e => setform({...form, examtime:
                                                        (e.target.checked? e.target.value: form.examtime)})}
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Do you want to use our Qualified Interviewer to take interview of the exam passing candidate?
                  </Form.Label>
                  <div className="mb-2">
                    <Form.Check
                      required custom inline label="Yes"
                                name="interviewer" value="yes" id="yes-interviewer"
                                type="radio"
                                onChange={e => setform({...form, interviewer:
                                              (e.target.checked? e.target.value: form.interviewer)})}
                    />
                    <Form.Check required custom inline label="No"
                                name="interviewer" value="no" id="no-interviwerer"
                                type="radio"
                                onChange={e => setform({...form, interviewer:
                                              (e.target.checked? e.target.value: form.interviewer)})}
                    />
                  </div>
                  {
                      form.interviewer == "yes" ?
                          <Fragment>
                            <Accordion className="mb-2">
                              <Card>
                                <Card.Header className="text-left">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    If yes, click here to select Interviewer
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <div>
                                      // interviewer page
                                    </div>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                            <Button href="/interviwer/:selectedInterviewer">Interviewer's Profile</Button>
                          </Fragment>:
                      ""
                  }
                </Form.Group>
              </Card.Body>
            </Card>
            <Button type="submit">Post Job</Button>
          </Form>
        </Card>
    );
};

export default JobPost;
