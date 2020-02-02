import React from 'react';
import "./styles.scss";
import content from "./content";
import { Link } from "react-router-dom";

const FooterNav = (props) => {
    return (
        <section className="footerNavContainer">
            <Link to="/" className="footerLinks">{content.HOME}</Link>
            <Link to="/legal" className="footerLinks">{content.LEGAL}</Link>
            <Link to="/help" className="footerLinks">{content.HELP}</Link>
            <div className="copyrightContainer">{content.COPYRIGHT}</div>
        </section>
    );
};

export default FooterNav;