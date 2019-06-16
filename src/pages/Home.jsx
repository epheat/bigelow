import React from 'react';

import Needle from 'Assets/space_needle.png';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the bigelow homepage.</h1>
            <img src={Needle} />
        </div>
    );
}

export default Home;