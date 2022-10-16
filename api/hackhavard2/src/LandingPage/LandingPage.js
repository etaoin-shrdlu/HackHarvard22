import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import salad from '../salad2.png';
import './LandingPage.css';

const BACKEND_URL = 'http://127.0.0.1:8000/';

function makeSearch(country, data) {
    window.location.pathname = 'recepies?cuisine=' + country + '&categories=' + data;
    let url_data = fetch(BACKEND_URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({
            'cuisine': country,
            'data': data
        }), // body data type must match "Content-Type" header
    });
    
}

function LandingPage() {
    let countries = [{ label: 'Indian', value: 'indian' }, { label: 'America', value: 'america' }, { label: 'Vietnamese', value: 'vietnamese' }, { label: 'Mexican', value: 'mexican' }];
    let [country, setCountry] = useState("Select cuisine");
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
                    img={salad}
                    title='Appetizers'
                    onclick={setMealCategory('side')}
                    description='Appetizers are a great way to get your daily dose of vegetables. They are also a great way to get your daily dose of vegetables.'

                />

                <Card
                    img={salad}
                    title='Entrees'
                    onclick={setMealCategory('entree')}
                    description='Entrees are the heart of a meal, and the most important bit of food! '
                />

                <Card
                    img={salad}
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
                <button className='search__btn' onClick={() => makeSearch(country, data)}>Search</button>
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
            <div className='overall__card' onclick={setCategory}>
                <div className='card__unclicked'>
                    <div className='card__body'>
                        <img className='card__image' src={props.img} />
                        <h2 className='card__title'>{props.title}</h2>
                        <p className='card__description'>{props.description}</p>
                    </div>
                    <div style="display:none" className='checkbox__container'>
                        <input
                            className='card__checkbox'
                            type="checkbox"
                            onChange={() => addOrRemove(props.title)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;