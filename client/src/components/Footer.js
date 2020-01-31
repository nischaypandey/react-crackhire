import React, { Fragment } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Link from './Links';

const CopyrightLine = props => {
    return (
        <p className="text-center"><i className="fa fa-copyright"></i> CrackHire, 2019</p>
    );
};

const SocialLinks = props => {
    return (
        <div className="d-flex justify-content-center">
          <LinkContainer to="/social/facebook">
            <i className="fab fa-facebook-square fa-2x mx-2"></i>
          </LinkContainer>
          <LinkContainer to="/social/twitter">
            <i className="fab fa-twitter-square fa-2x mx-2"></i>
          </LinkContainer>
          <LinkContainer to="/social/instagram">
            <i className="fab fa-instagram fa-2x mx-2"></i>
          </LinkContainer>
        </div>  
    );
};

const FooterLinks = props => {
    const items = [
        {href:"/home", text: "Home"},
        {href:"/services", text: "Services"},
        {href:"/contact", text: "Contact Us"},
        {href:"/blogs", text: "Blogs"},
    ];
    return (
        <Link items={items}/>
    );
};

const Footer = () => {
    return (
        <Fragment>
          <div className="mb-2">
            <FooterLinks/>
          </div>
          <div>
            <CopyrightLine />
          </div>
          <div>
            <SocialLinks />
          </div>
        </Fragment>
    );
};

export default Footer;
