import React from 'react';
import "./styles.scss";
import content from "./content";
import { NavLink } from "react-router-dom";
import Icon from "../../common/Icon";

const Nav = () => {
    return (
        <section className="navContainer">
            <NavLink to="/" className="navHome"><h1>{content.TITLE}</h1></NavLink>
            <NavLink to="/about" className="navLinks">{content.ABOUT}</NavLink>
            <NavLink to="/resources" className="navLinks">{content.RESOURCES}</NavLink>
            <NavLink to="/contact" className="navLinks">{content.CONTACT}</NavLink>
            <NavLink to="/" className="iconContainer"><Icon className="logoIcon" iconName="logo" /></NavLink>
        </section>
    );
};

export default Nav;