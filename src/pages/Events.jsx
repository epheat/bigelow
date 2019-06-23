import React from 'react';
import { Link } from 'react-router-dom';

import Tub from 'Assets/tub.jpg';
import Poker from 'Assets/2_7.png';

const Events = () => {
    return (
        <div>
            <h1>Events</h1>
            <p>Come on down to the bigelow house we've got a hot tub.</p>
            <img src={Tub} />
            <h2>Poker Night</h2>
            <p>Every Wednesday we realize we forgot to invite people over for poker night so we just play between the 4 of us it's great.</p>
            <p>View the <Link to='/poker'>results</Link> from past games.</p>
            <img src={Poker} />
        </div>
    );
}

export default Events;