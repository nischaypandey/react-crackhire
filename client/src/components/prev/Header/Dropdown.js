import React from 'react';

const Dropdown = (props) => {
    const dropdownItem = "dropdown-item text-capitalize";
    const dropdownToggle = "btn btn-secondary dropdown-toggle text-capitalize";
    return (
        <div className="dropdown">
          <button className={dropdownToggle} type="button" id="dropdownMenu"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu">
            {props.items.map(item => <a className={dropdownItem} href={item.href}>{item.text}</a>)}
          </div>
        </div>
    );
};

export default Dropdown;
