import React from 'react';
import Card from "./Card";

const CardSet = ({ data }) => {return data.map((data, i) => <Card data={data} i={i} />);};

export default CardSet;