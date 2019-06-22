import React from 'react'; 

import Sound from '../../assets/baboosh.mp3';

class Baboosh extends React.Component {
    handlerClick(e) {
        e.preventDefault();
        var audio = new Audio(Sound);
        audio.play()
    }

    render() {
        return (
            <span onClick={this.handlerClick}>🅱️</span>
        );
    }
}

export default Baboosh;
