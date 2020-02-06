import React from 'react';
import "./styles.scss";
import content from "./content";
import NavContainer from "../../containers/NavContainer";
import FooterNav from "../FooterNav";

const Resources = () => {
    return (
        <div className="resourcesContainer">
            <NavContainer />
            <section className="mediaBox">
                <ul className="mediaBoxTabContainer">
                    <li className="mediaBoxTab">{content.LITERATURE}</li>
                    <li className="mediaBoxTab">{content.VIDEOS}</li>
                    <li className="mediaBoxTab">{content.OTHER}</li>
                </ul>
                <ul className="mediaBoxContentContainer">

                </ul>
            </section>
            <FooterNav />
        </div>
    );
};

export default Resources;