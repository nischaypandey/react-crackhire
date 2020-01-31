import React from 'react';

const Select = (props) => {
    const select = "custom-select";
    const option = "text-capitalize";
    return (
        <select className={select} onChange={props.onChange} id="experience">
          {props.options.map(option => <option value={option.value}
                                               className={option}>{option.text}</option>)}
        </select>

    );
};

export default Select;
