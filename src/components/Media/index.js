import React from 'react';
import "./styles.scss";
import content from "./content";
import NavContainer from "../../containers/NavContainer";
import FooterNav from "../FooterNav";

const Media = () => {
    return (
        <div className="mediaContainer">
            <NavContainer />
            <div className="mediaBodyContainer">Sanity Check</div>
            <FooterNav />
        </div>
    );
};

export default Media;