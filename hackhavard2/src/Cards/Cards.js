import React from 'react';
import picture from '../logo.png';
import './Cards.css';

function Cards() {
    return (
        <div className="container">
            <div
                className='card'
                style={{ backgroundImage: `url(${picture})` }}>
            </div>
        </div>
    );
}

export default Cards;