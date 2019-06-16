import React from 'react';
import classNames from 'classnames';

const BigelowHero = ({ images, showIndex }) => {
    return (
        <div className="bigelow-hero">
            {
                images.map((image, index) => (
                    <img
                        key={index}
                        className={classNames("bigelow-hero-img", {active: index == showIndex})}
                        src={image}
                    />
                ))
            }
        </div>
    );
}

export default BigelowHero;