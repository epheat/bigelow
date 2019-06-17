import React from 'react';

import Jack from 'Assets/jack.gif';

const About = () => {
    return (
        <div className="about-page">
            <h1>About us</h1>
            <img src={Jack} />
        </div>
    );
}

export default About;