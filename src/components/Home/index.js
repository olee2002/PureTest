import React from 'react';
import "./styles.scss";
import content from "./content";
import NavContainer from "../../containers/NavContainer";

const Home = (props) => {
    return (
        <div className="homeContainer">
            <NavContainer />
        </div>
    );
};

export default Home;