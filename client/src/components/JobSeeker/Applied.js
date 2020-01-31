import React from 'react';
import { Tabs, Tab, Card } from 'react-bootstrap';

const Applied = (props) => {
    return (
        <Tabs defaultActiveKey="jobs" id="applied" variant="tabs">
          <Tab eventKey="jobs" title="Jobs">
            { props.applied? props.applied.filter(applied => applied.type == 'job'):
              <Card className="border-top-0 rounded-0 rounded-bottom py-2">
                <h4 className="text-center m-2">No Jobs applied</h4>
              </Card>
            }
          </Tab>
          <Tab eventKey="internships" title="Internships">
            { props.applied? props.applied.filter(applied => applied.type == 'internship'):
              <Card className="border-top-0 rounded-0 rounded-bottom py-2">
                <h4 className="text-center m-2">No Internships applied</h4>
              </Card>
            }
          </Tab>
          <Tab eventKey="walkins" title="Walkins">
            { props.applied? props.applied.filter(applied => applied.type == 'walkin'):
              <Card className="border-top-0 rounded-0 rounded-bottom py-2">
                <h4 className="text-center m-2">No Walkins attended</h4>
              </Card>
            }
          </Tab>
        </Tabs>
    );
};

export default Applied;
