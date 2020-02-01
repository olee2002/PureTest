import React from 'react';
import Card from "./Card";

const CardSet = ({ data }) => {
    const cardArray = data.map(data => 
        <Card data={data} />
    );
    return cardArray;
};

export default CardSet;