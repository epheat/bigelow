import React from 'react';
import { Link } from 'react-router-dom';

import Tub from 'Assets/tub.jpg';
import Poker from 'Assets/2_7.png';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // stuff
        }
    }
    render() {
        return (
            <div className="events-page">
                <div className="page-content">
                    <h1>Events</h1>
                    <div className="event-container">
                        <h2>New Year's Party</h2>
                        <h3>Tuesday 12/31/19 @ 8:00pm</h3>
                        <p>
                            We're hosting a New Year's party at our house! Come on over any time after 8, we'll have:
                            <ul>
                                <li>drinks</li>
                                <li>games</li>
                                <li>fireworks</li>
                                <li>music</li>
                                <li>fun</li>
                                <li>friends</li>
                                <li>and more...</li>
                            </ul>
                            Drinks will be provided, but we appreciate any snacks and/or drinks you bring. At midnight, we'll have a great view of the fireworks that launch from the Space Needle! To RSVP, message John.
                        </p>
                    </div>
                    <h2>Hot Tub</h2>
                    <p>Come on down to the bigelow house we've got a hot tub.</p>
                    <img src={Tub} />
                    <h2>Poker Night</h2>
                    <p>Every Wednesday we realize we forgot to invite people over for poker night so we just play between the 4 of us it's great.</p>
                    <p>View the <Link to='/poker'>results</Link> from past games.</p>
                    <img src={Poker} />
                </div>
            </div>
        );    
    }
}

export default Events;