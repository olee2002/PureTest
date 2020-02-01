import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../../common/Icon";

const Card = () => {
    return (
        <ul className="profileCardContainer hoverable">
            <li className="fullNameLabel">Eugene Kim</li>
            <div className="position">Partner and Manager</div>
            <div className="iconContainer"><Icon className="profileIcon" iconName="eugene" /></div>
            <li className="dateOfBirthContainer">
                <label className="dateOfBirthLabel">{content.DATE_OF_BIRTH}&nbsp;</label>
                <div className="dateOfBirth">June 20, 1985</div>
            </li>
            <li className="residesContainer">
                <label className="residesLabel">{content.CURRENTLY_RESIDES}&nbsp;</label>
                <div className="resides">Johns Creek, GA</div>
            </li>
            <li className="occupationContainer">
                <label className="occupationLabel">{content.OCCUPATION}&nbsp;</label>
                <div className="occupation">Software Developer</div>
            </li>
            <li className="summaryContainer">
                <label className="summaryLabel">{content.SUMMARY}&nbsp;</label>
                <div className="summary">Enter summary here</div>
            </li>
        </ul>
    );
};

export default Card;