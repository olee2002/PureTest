import React from 'react';
import Card from "./Card";

const CardSet = ({ data }) => {
    const cardArray = data.map((data, i) => <Card data={data} i={i} />);
    return cardArray;
};

export default CardSet;