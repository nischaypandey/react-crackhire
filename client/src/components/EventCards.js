import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Event from './Event';

const EventCards = (props) => {
    const events = [];
    return (
        <CardDeck>
          { events.map(event => <Event event={event}/>) }
        </CardDeck>
    );
};

export default EventCards;
