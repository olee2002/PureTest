import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";
import NavContainer from "../../containers/NavContainer";
import Icon from "../../common/Icon";
import FooterNav from "../FooterNav";

const Home = (props) => {
    let [interval, setIntervalFunction] = useState(0);

    setInterval(() => {
        setIntervalFunction(interval = interval === 4 ? 0 : interval + 1);
    }, 5000);

    return (
        <div className="homeContainer">
            <NavContainer />
            <section className="headerContainer">
                <h1 className="headerLabels">{content.HEADER_ARRAY[interval]}</h1>
                <div className="photoGallery">
                    <Icon className="arrowLeftIcon" iconName="arrow_left" />
                    <Icon className="arrowRightIcon" iconName="arrow_right" />
                    Images go here
                </div>
            </section>
            <section className="bodyContainer">
                <h1>More content to come</h1>
            </section>
            <FooterNav />
        </div>
    );
};

export default Home;