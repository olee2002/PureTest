import React from 'react';
import "./styles.scss";
import content from "./content";
import Iframe from "../../../common/Iframe";

const Video = () => {
    return (
        <section className="videoContainer">
            <ul className="videoList">
                List Goes Here
            </ul>
            <Iframe 
                className="videoIframeComponent"
                src=""
                title=""
                width="560px"
                height="340px"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    );
};

export default Video;