import React from 'react';

const BigelowBoy = ({ name, image, description, word }) => {
    return (
        <div className="bigelow-boy">
            <img src={image} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>My word of the day is: <span className="word">{word}</span></p>
        </div>
    )
}

export default BigelowBoy;