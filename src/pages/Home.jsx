import React from 'react';
import uuid from 'uuid/v4';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import BigelowSun from 'Assets/bigelow_sun.jpg';
import BigelowSnow from 'Assets/bigelow_snow.jpg';
import BigelowHero from '../components/BigelowHero';

class Dot extends React.Component {
    render() {
        return (
            <div
                className="bigelow-circle"
                onClick={this.props.onClick}
            />
        )
    }
}

class DotContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dots: []
        }
    }
    addDot = () => {
        this.setState( prevState => {
            return {
                dots: [...prevState.dots, { id: uuid() }]
            }
        })
    }
    removeDot = (id) => {
        console.log("remove");
        this.setState( prevState => {
            return {
                dots: [...prevState.dots].filter( item => item.id !== id )
            }
        })
    }
    render() {
        return (
            <div className="dots">
                <TransitionGroup className="flex-container">
                        { 
                            this.state.dots.map( ({ id }) => (
                                <CSSTransition
                                    key={id}
                                    timeout={400}
                                    classNames="fade"
                                >        
                                    <Dot
                                        onClick={() => this.removeDot(id)}
                                    />
                                </CSSTransition>
                            ))
                        }
                </TransitionGroup>
                <div className="flex-container">
                    <button onClick={this.addDot}>add a dot</button>
                </div>
            </div>
        )
    }
} 

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroImages: [
                BigelowSun,
                BigelowSnow
            ],
            textColors: [
                '#eee',
                '#111'
            ],
            heroText: new Array(10).fill("Bigelow"),
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
                    textColor={this.state.textColors[this.state.imageIndex]}
                    textLines={this.state.heroText}
                    showIndex={this.state.imageIndex}
                />
                <div className="page-content">
                    <h1 onClick={this.incrementIndex}>Welcome</h1>
                    <p>
                        This is a website for the bigelow house. It's a popular destination for recent college grad software engineers.
                        We hope you enjoy your stay. Click on the title to change the hero image.
                    </p>
                    <p>
                        Eventually this site is going to have a bunch of cool stuff on here but for now its basically just a plain static site.
                        
                    </p>
                    <DotContainer></DotContainer>
                    <p>
                        © 2019 Bigelow Boys
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;