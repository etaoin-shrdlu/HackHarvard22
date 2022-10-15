import React from 'react';
import salad from '../salad2.png';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className='wrapper'>
            <Card
                img={salad}
                title='Appetizers'
                description='Salads are a great way to get your daily dose of vegetables. They are also a great way to get your daily dose of vegetables.'
            />

            <Card
                img={salad}
                title='Entrees'
                description='Entrees are a great way to get your daily dose of vegetables. They are also a great way to get your daily dose of vegetables.'
            />

            <Card
                img={salad}
                title='Desserts'
                description='Desserts are a great way to get your daily dose of vegetables. They are also a great way to get your daily dose of vegetables.'
            />

            <Card
                img={salad}
                title='All'
                description='Sides are a great way to get your daily dose of vegetables. They are also a great way to get your daily dose of vegetables.'
            />
        </div>
    );
}

function Card(props) {
    return (
        <div className='overall__card'>
            <div className='card'>
                <div className='card__body'>
                    <img className='card__image' src={props.img} />
                    <h2 className='card__title'>{props.title}</h2>
                    <p className='card__description'>{props.description}</p>
                </div>
                <button className='card__btn'>View Recipe</button>
            </div>
        </div>
    );
};

export default LandingPage;