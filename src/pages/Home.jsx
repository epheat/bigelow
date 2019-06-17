import React from 'react';

import BigelowSun from 'Assets/bigelow_sun.jpg';
import BigelowSnow from 'Assets/bigelow_snow.jpg';
import BigelowHero from '../components/BigelowHero';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroImages: [
                BigelowSun,
                BigelowSnow
            ],
            imageIndex: 0,
        }

        this.incrementIndex = this.incrementIndex.bind(this);
    }

    incrementIndex() {
        this.setState({
            imageIndex: (this.state.imageIndex + 1) % this.state.heroImages.length
        })
    }

    render() {
        return (
            <div className="bigelow-home">
                <BigelowHero
                    images={this.state.heroImages}
                    showIndex={this.state.imageIndex}
                />
                <div className="page-content">
                    <h1 onClick={this.incrementIndex}>Bigelow</h1>
                    <p>
                        This is a website for the bigelow house. It's a popular destination for recent college grad software engineers.
                        We hope you enjoy your stay. Click on the title to change the hero image.
                    </p>
                    <p>
                        Eventually this site is going to have a bunch of cool stuff on here but for now its just a plain static site.
                    </p>
                    <div className="flex-container">
                        <div className="bigelow-circle" />
                        <div className="bigelow-circle" />
                        <div className="bigelow-circle" />
                        <div className="bigelow-circle" />
                        <div className="bigelow-circle" />
                    </div>
                    <p>
                        © 2019 Bigelow Boys
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;