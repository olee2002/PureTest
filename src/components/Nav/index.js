import React from 'react';
import "./styles.scss";
import content from "./content";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <section className="navContainer">
            <NavLink to="/" className="navHome"><h1>{content.TITLE}</h1></NavLink>
            <NavLink to="/about" className="navLinks">{content.ABOUT}</NavLink>
            <NavLink to="/resources" className="navLinks">{content.RESOURCES}</NavLink>
            <NavLink to="/contact" className="navLinks">{content.CONTACT}</NavLink>
            <div className="">Something here later</div>
        </section>
    );
};

export default Nav;