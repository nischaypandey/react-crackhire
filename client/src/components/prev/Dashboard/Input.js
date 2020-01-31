import React from 'react';

const Input = (props) => { // { fontawesome class, placeholder, id }
    const formGroup = "form-group";
    const inputGroup = "input-group";
    const prepend = "text-light bg-primary input-group-text input-group-prepend";
    const inputCont = "col-lg-4";
    const input = "form-control";
    return (
          <div className={inputGroup}>
            <div className={prepend}>
              <i className={props.icon}></i>
            </div>
              <input type="text" className={input} placeholder={props.placeholder} aria-label=""
                     aria-describedby="basic-addon1" id={props.id} onChange={props.onChange}/>
          </div>
    );
};

export default Input;
