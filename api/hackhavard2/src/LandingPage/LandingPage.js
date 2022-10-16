import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import salad from '../salad2.png';
import './LandingPage.css';

const BACKEND_URL = 'http://127.0.0.1:8000/'

function makeSearch(country, data) {
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
    })
    this.props.history.push('/recepies/?' + url_data)
}

function LandingPage() {
    let countries = [{ label: 'Indian', value: 'indian' }, { label: 'America', value: 'america' }, { label: 'Vietnamese', value: 'vietnamese' }, { label: 'Mexican', value: 'mexican' }];
    let [country, setCountry] = useState("Select cuisine");
    const [data, setData] = useState([]);

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
            </div>
            <div className='crusine__selection'>
                <select onChange={addOrRemove}>
                    <option value="Select cruisne">Select cruisne</option>
                    {
                        countries.map((country) => <option key={country.label} value={country.value}>{country.label}</option>)
                    }
                </select>
            </div>
            <div className='search__btn'>
                <button onClick={() => makeSearch(country, data)}>Search</button>
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

    const buttonSwitch = () => {
        
    }

    return (
        <>
            <div className='overall__card__clicked' onclick={buttonSwitch}>
                <div className='card'>
                    <div className='card__body'>
                        <img className='card__image' src={props.img} />
                        <h2 className='card__title'>{props.title}</h2>
                        <p className='card__description'>{props.description}</p>
                    </div>
                    <div className='checkbox__container'>
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