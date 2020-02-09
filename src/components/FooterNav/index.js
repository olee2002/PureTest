import React from 'react';
import "./styles.scss";
import content from "./content";
import { Link } from "react-router-dom";

const FooterNav = (props) => {
    return (
        <section className="footerNavContainer">
            <Link to="/privacy" className="footerLinks">{content.PRIVACY_POLICY}</Link>
            <Link to="/terms" className="footerLinks">{content.TERMS_OF_USE}</Link>
            <Link to="/help" className="footerLinks">{content.HELP}</Link>
            <div className="copyrightContainer">{content.COPYRIGHT}</div>
        </section>
    );
};

export default FooterNav;