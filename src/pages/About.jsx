import React from 'react';

import Jack from 'Assets/jack.gif';
import BigelowBoy from '../components/BigelowBoy';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boys: [
                { name: "Evan", image: Jack, description: "I like to code." },
                { name: "Scott", image: Jack, description: "I have a dog." },
                { name: "John", image: Jack, description: "I broke the dryer." },
                { name: "Blake", image: Jack, description: "I live in the basement." },
            ]
        }
    }

    render() {
        return (
            <div className="about-page">
                <div className="page-content">
                    <h1>About us</h1>
                    <div className="bigelow-boys">
                        {
                            this.state.boys.map(boy => (
                                <BigelowBoy
                                    key={boy.name}
                                    { ...boy }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default About;