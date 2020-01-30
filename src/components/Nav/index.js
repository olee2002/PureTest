import React from 'react';
import "./styles.scss";
import content from "./content";

const Nav = (props) => {
    return (
        <div className="navContainer">
            <h1>{content.TITLE}</h1>
        </div>
    );
};

export default Nav;