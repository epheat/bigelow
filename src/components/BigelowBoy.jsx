import React from 'react';

const BigelowBoy = ({ name, image, description }) => {
    return (
        <div className="bigelow-boy">
            <img src={image} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default BigelowBoy;