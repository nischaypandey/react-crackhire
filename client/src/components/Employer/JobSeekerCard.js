import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const JobSeekerCard = props => {
    return (
        <Card className="shadow-sm">
          <Card.Body>
            <div className="text-capitalize mb-1">
              Name: {props.jobseeker.name}
            </div>
            <div className="text-capitalize mb-1">
              KeySkills: <div className="d-inline">
                 {props.jobseeker.keyskills
                  .map(skill => <span className="mx-1 text-capitalize btn btn-primary btn-sm">
                                        {skill}</span>)}
               </div>
            </div>
            <div className="text-capitalize mb-1">
              Experience: {props.jobseeker.experience}
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={e => e /* shortlist */}>Shortlist</Button>
              <Button variant="primary" className="ml-1"
                      href="/jobseeker/:id/resume">View Full Resume</Button>
            </div>
          </Card.Footer>
        </Card>
    );
};

export default JobSeekerCard;
