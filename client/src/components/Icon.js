import React from 'react';

const Icon = (props) => {
    return (
        <div>
          <i className={props.icon.icon}></i>
          <span>{props.icon.text}</span>
        </div>
    );
};

export default Icon;
