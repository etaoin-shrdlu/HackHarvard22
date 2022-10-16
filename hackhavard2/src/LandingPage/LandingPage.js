import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import salad from '../salad2.png';
import './LandingPage.css';

function LandingPage() {

    let countries = [{ label: 'Indian', value: 'indian' }, { label: 'America', value: 'america' }, { label: 'Vietnamese', value: 'vietnamese' }, { label: 'Mexican', value: 'mexican' }];
    let [country, setCountry] = useState("Select cruisne");
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
                    <input
                        className='card__checkbox'
                        type="checkbox"
                        onChange={() => addOrRemove(props.title)}
                    />
                </div>
            </div>
        </>
    );
};

export default LandingPage;