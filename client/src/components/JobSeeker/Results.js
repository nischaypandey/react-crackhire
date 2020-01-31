import React from 'react';
import { Card } from 'react-bootstrap';
import AdCard from './AdCard';

const Result = props => {
    return (
        <Card>
          <Card.Body>
            {props.results ? props.results.map(result => <div>
                                                       <AdCard adcard={result}/>
                                                     </div>): null}
          </Card.Body>
        </Card>
    );
};

export default Result;
