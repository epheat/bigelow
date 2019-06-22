import React from 'react';
import classNames from 'classnames';

const BigelowHero = ({ images, textColor, textLines, showIndex }) => {
    return (
        <div className="bigelow-hero">
            <div className="hero-container">
                <div className="title-container">
                    {
                        textLines && textLines.map((text, index) => (
                            <h1 
                                key={index}
                                style={{
                                    top: 50*index,
                                    opacity: 1-0.1*index,
                                    color: textColor
                            }}>
                                {text}
                            </h1>
                        ))
                    }
                </div>
                <div className="image-container">
                    {
                        images && images.map((image, index) => (
                            <img
                                key={index}
                                className={classNames("bigelow-hero-img", {active: index == showIndex})}
                                src={image}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default BigelowHero;