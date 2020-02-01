import React from 'react';
import "./styles.scss";
import content from "./content";
import NavContainer from "../../containers/NavContainer";
import CardSet from "./CardSet";

const About = ({ data }) => {
    return (
        <div className="aboutContainer">
            <NavContainer />
            <section className="cardSetContainer">
                <CardSet data={data} />
            </section>
            <section className="contentContainer">

                <p><strong>{content.KFLLC_LABEL}</strong>&nbsp;{content.PART_ONE}&nbsp;{content.PART_TWO}</p>
                
                <p>{content.PART_THREE}&nbsp;<strong>{content.PROPERTIES_LABEL}</strong>&nbsp;{content.PART_FOUR}</p>

                <p>{content.PART_FIVE}</p>

                <p>{content.PART_SIX}&nbsp;<strong>{content.PRIVACY_DISCLAIMER}</strong>&nbsp;{content.PART_SEVEN}</p>

                <p><strong>{content.END_DISCLAIMER}</strong>&nbsp;{content.APPRECIATION}</p>
                
            </section>
        </div>
    );
};

export default About;