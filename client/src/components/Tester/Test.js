import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TestCards from './TestCards';

const Test = (props) => {
    return (
        <Card border="primary" className="px-2 py-3">
          <Form>
            <Form.Group className="mx-3 mb-3">
              <Form.Label as="h1" className="lead">
                Skills you want to post the question
              </Form.Label>
              <Form.Control as="select">
                <option>Technical Test</option>
                <option>Personality Test</option>
                <option>Aptitute Test</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mx-3 mb-3">
              <Form.Label as="h2" className="lead">
                Domain Knowledge
              </Form.Label>
              <Form.Control as="select">
                <option>Digital Media</option>
                <option>Digital Painting</option>
                <option>Dot Net</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mx-3 mb-3">
              <Form.Label as="h2" className="lead">
                Experience required to answer these questions
              </Form.Label>
              <Form.Control as="select">
                <option>1-2 years</option>
                <option>2-3 years</option>
                <option>3-4 years</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mx-3 mb-3">
              <Form.Label as="h2" className="lead">No of questions</Form.Label>
              <Form.Group>
                <Form.Check custom inline label="10" type="radio" id="10" name="number"/>
                <Form.Check custom inline label="20" type="radio" id="20" name="number"/>
                <Form.Check custom inline label="30" type="radio" id="30" name="number"/>
              </Form.Group>
            </Form.Group>
            <Form.Group className="mx-3 mb-3">
              <Form.Label as="h2" className="lead">Question Type</Form.Label>
              <Form.Check custom label="MCQ" name="type" id="mcq"/>
            </Form.Group>
            <Form.Group className="mx-3 mb-3">
              <Form.Label as="h2" className="lead">Cards to accept questions</Form.Label>
              <Form.Group>
                <Form.Check custom inline label="Yes" type="radio"
                            id="card-option-1" name="cardQuestions"/>
                <Form.Check custom inline label="No" type="radio"
                            id="card-option-2" name="cardQuestions"/>
                <div className="m-2">
                  <TestCards />
                </div>
              </Form.Group>
            </Form.Group>
            <Form.Group className="mx-3 mb-3">
              <Form.Label as="h2" className="lead">Time Required to solve questions</Form.Label>
              <Form.Group>
                <Form.Check custom inline label="10" type="radio" id="time-option-1" name="time"/>
                <Form.Check custom inline label="20" type="radio" id="time-option-2" name="time"/>
              </Form.Group>
            </Form.Group>
            <Form/>
          </Form>
        </Card>
    );
};

export default Test;
