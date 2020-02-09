import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";
import Iframe from "../../../common/Iframe";

const Video = () => {
    const [index, setIndex] = useState(0);
    return (
        <section className="videoContainer">
            <ul className="videoList">
                {content.VIDEOS.map((VIDEO, i) => {
                    return (
                        <li 
                            onClick={() => setIndex(i)} 
                            className="videoButton"
                            style={index === i ? { background: "#c90016", color: "#ffffff"} : {}} 
                            key={i}
                        >
                            {VIDEO.TITLE}
                        </li>
                    );
                })}
            </ul>
            <div className="iframeContainer">
                <Iframe 
                    className="videoIframeComponent"
                    src={content.VIDEOS[index].LINK}
                    title=""
                    width="560px"
                    height="340px"
                    frameBorder="4"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <div className="speakerLabelContainer"><h2>{content.VIDEOS[index].SPEAKER}</h2></div>
            </div>
        </section>
    );
};

export default Video;