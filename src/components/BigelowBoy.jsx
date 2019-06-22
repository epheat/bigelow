import React from 'react';

import Baboosh from './Baboosh';

const BigelowBoy = ({ name, color, image, description, word }) => {
    let col = color || { red: 200, green: 140, blue: 140 };
    let styles = {
        backgroundColor: `rgb(${col.red},${col.green},${col.blue})`,
        borderColor: `rgb(${col.red-30},${col.green-30},${col.blue-30})`,
    }
    return (
        <div className="bigelow-boy" style={styles}>
            <img src={image} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>My word of the day is: <span className="word"><Baboosh />{word && word.toLowerCase().replace('b', '')}</span></p>
        </div>
    )
}

export default BigelowBoy;
