import React, { Component }from 'react';

import Input from './Input';
import Select from './Select';
import { experienceLevels } from './experienceLevels';

class Bar extends Component {
    constructor (props){
        super(props);
        this.state = {
            query: "",
            location: "",
            experience: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.report = props.reportBar;
    }
    
    handleChange(event){
        const id = [event.target.id][0];
        this.setState({ [event.target.id]: event.target.value });
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.report(this.state);
    }
    
    render(){
        const options = experienceLevels;

        // styles
        const form = "form-row";
        const query = "col-lg-5 mb-1";
        const loc = "col-lg-3 mb-1";
        const select = "col-lg-2 mb-1";
        const button = "btn btn-primary mb-1 btn-block";
        const buttonDiv = "col-lg-2";
        
        return (
            <form onSubmit={this.handleSubmit}>
              <div className={form}>
                <div className={query}>
                  <Input onChange={this.handleChange}
                         placeholder="Search by Skill, Company or Job" id="query"
                         icon="fas fa-search"/>
                </div>
                <div className={loc}>
                  <Input onChange={this.handleChange}
                         placeholder="Location" id="location"
                         icon="fas fa-map-marker-alt"/>
                </div>
                <div className={select}> 
                  <Select options={options} onChange={this.handleChange} />
                </div>
                <div className={buttonDiv}>
                  <button type="submit" className={button}>Search</button>
                </div>
              </div>
            </form>
        );
    }

}

export default Bar;
