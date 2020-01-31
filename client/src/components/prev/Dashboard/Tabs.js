import React from 'react';
import $ from 'jquery';

import { tabItems } from './tabItems';

const TabItem = (props) => {
    const tabItem = "nav-item";
    const tabLink = "nav-link text-capitalize";
    return (
        <li className={tabItem}>
          <a className={tabLink} id={props.id} onClick={props.onClick}>{props.text}</a>
        </li>
    );
};

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.options = tabItems;
        this.state = {
            option: this.options[0]
        };
        this.handleTab = this.handleTab.bind(this);
        this.reportParent = props.reportTab;
    }
    handleTab(event){
        const id = [event.target.id][0];
        this.setState({ option: id });
        this.options.forEach(option => $("#" + option).removeClass("active"));
        $("#" + id).addClass("active");
        this.reportParent(this.state);
    }
    render(){
        const tabs = "nav nav-tabs";
        return (
            <ul className={tabs}>
              {this.options.map(option => <TabItem id={option} text={option}
                                                   onClick={this.handleTab}/>)}
            </ul>
        );
    }
}

export default Tabs;
