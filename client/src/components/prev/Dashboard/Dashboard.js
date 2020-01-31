import React, { Component } from 'react';

import Bar from './Bar';
import Tabs from './Tabs';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.handleBar = this.handleBar.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.state = {
            selector: "all",
            query: "",
            location: "",
            experience: "",
        };
    }
    handleBar({ query, location, experience }){
        this.setState({ query, location, experience });
    }
    handleTab({selector}){
        this.setState({ selector });
    }
    render(){
        const tabs = "mb-2";
        const bar = "mb-1";
        return (
            <div>
              <div className={tabs}>
                <Tabs reportTab={this.handleTab}/>
              </div>
              <div className={bar}>
                <Bar reportBar={this.handleBar}/>
              </div>
            </div>
        );
    }
}

export default Dashboard;

