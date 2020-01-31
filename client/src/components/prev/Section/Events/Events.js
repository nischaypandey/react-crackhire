import React from 'react';

const Event = (props) => {
    const eventStyle = "list-group-item";
    return (
        <p className={eventStyle}>{props.event.title}</p>
    );
};

const Events = (props) => {
    const containerStyle = "my-2 col-md-4";
    const headerStyle = "text-center list-group-item bg-secondary text-light f4";
    const contentStyle = "list-group";
    return (
        <section id="Events" className={containerStyle}>
          <ul className={contentStyle}>
            <li id="header" className={headerStyle}>News &amp; Events Information</li>
            {props.events.map(e => <Event key={e.id} event={e}/>)}
          </ul>
        </section>
    );
};

export default Events;
