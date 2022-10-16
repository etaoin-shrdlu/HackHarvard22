import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import entrees from '../entrees.png';
import desserts from '../desserts.png';
import appetizers from '../appetizers.png';

import './LandingPage.css';

var global_meal = '';

function makeSearch(country) {
    window.location.replace('recepies?cuisine=' + country + '&meal=' + global_meal);   
}

function setMealCategory(meal) {
    global_meal = meal;
}

function LandingPage() {
    let countries = [{ label: 'Indian', value: 'indian' }, { label: 'America', value: 'america' }, { label: 'Vietnamese', value: 'vietnamese' }, { label: 'Mexican', value: 'mexican' }];
    let [country, setCountry] = useState("Select cruisne");
    const [data, setData] = useState([]);
    const [selected_category, setCategory] = useState("");

    let addOrRemove = (e) => {
        setCountry(e.target.value);
        if (data.includes(e.target.value)) {
            setData(data.filter((item) => item !== e.target.value));
        }
        else {
            setData([...data, e.target.value]);
        }
    }

    return (
        <>
            <div className='wrapper'>
                <Card
                    img={appetizers}
                    title='Appetizers'
                    onclick={setMealCategory('side')}
                    description='Appetizers are a great way to get your daily dose of vegetables. They are also a great way to get your daily dose of vegetables.'

                />

                <Card
                    img={entrees}
                    title='Entrees'
                    onclick={setMealCategory('entree')}
                    description='Entrees are the heart of a meal, and the most important bit of food! '
                />

                <Card
                    img={desserts}
                    title='Desserts'
                    onclick={setMealCategory('dessert')}
                    description='Desserts -- for when you want to enjoy life.'
                />
            </div>
            <div className='crusine__selection'>
                <select onChange={addOrRemove}>
                    <option value="Select cruisne">Select cuisine</option>
                    {
                        countries.map((country) => <option key={country.label} value={country.value}>{country.label}</option>)
                    }
                </select>
            </div>
            <div className='search__btn__container'>
                <button className='search__btn' onClick={() => makeSearch(country)}>Search</button>
            </div>
        </>
    );
}

function Card(props) {
    const [data, setData] = useState([]);
    const addOrRemove = (preference) => {
        if (data.includes(preference)) {
            setData(data.filter((item) => item !== preference));
        } else {
            setData([...data, preference]);
        }
    };

    return (
        <>
            <div className='overall__card'>
                <div className='card'>
                    <div className='card__body'>
                        <img className='card__image' src={props.img} />
                        <h2 className='card__title'>{props.title}</h2>
                        <p className='card__description'>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;