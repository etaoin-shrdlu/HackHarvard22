import React, { useState } from 'react';
import picture from '../logo.png';
import './Recepies.css';
import { useLocation } from "react-router-dom";

var recipes; //last minute change

function Recepies() {
    /*let [recipes, setRecipes] = useState([
        {
            name: "Chicken Parmesan",
            url: picture,
            time: "30 minutes",
            tags: ["Chicken", "Italian", "Dinner"],
            ingredients: ["chicken", "tomato sauce", "cheese", "pasta"],
            instructions: "1. Cook the chicken. 2. Cook the pasta. 3. Mix the chicken and pasta. 4. Add tomato sauce and cheese. 5. Enjoy!",
            calories: 500,
            level: "easy",
        },
    ]);*/

    const BACKEND_URL = 'http://127.0.0.1:8000/';


    const search = useLocation().search;
    let cuisine = new URLSearchParams(search).get('cuisine');
    let meal_category = new URLSearchParams(search).get('meal');

    console.log(cuisine);
    console.log(meal_category)

    let url_data = null;

    recipes = 
            [{
                name: "Chicken Parmesan",
                url: picture,
                time: "30 minutes",
                tags: ["Chicken", "Italian", "Dinner"],
                ingredients: ["chicken", "tomato sauce", "cheese", "pasta"],
                instructions: "1. Cook the chicken. 2. Cook the pasta. 3. Mix the chicken and pasta. 4. Add tomato sauce and cheese. 5. Enjoy!",
                calories: 500,
                level: "easy",
            }] // default value for debbugging
    
    fetch(BACKEND_URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin:': '*'
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({
            'cuisine': cuisine,
            'meal': meal_category
        })
    }).then((response) => {
        url_data = response
        recipes = 
            [{
                name: "Chicken Parmesan",
                url: picture,
                time: "30 minutes",
                tags: ["Chicken", "Italian", "Dinner"],
                ingredients: ["chicken", "tomato sauce", "cheese", "pasta"],
                instructions: "1. Cook the chicken. 2. Cook the pasta. 3. Mix the chicken and pasta. 4. Add tomato sauce and cheese. 5. Enjoy!",
                calories: 500,
                level: "easy",
            }]
        console.log('SUCCESS')
        console.log(url_data)
        });

    


    return (
        <>
            <div >
                <div className="card_container">
                    {recipes.map((recipe) => (

                        <div
                            className="card_entrees"
                            style={{ backgroundImage: `url(${recipe.url})` }}
                            key={recipe.name}
                        >
                            <h3 className='name'>{recipe.name}</h3>
                        </div>

                    ))}
                </div>

                <div>
                    <div className="tags">
                        {recipes.map((recipe) => (
                            recipe.tags.map((tag) => (
                                <p>{tag}</p>
                            ))
                        ))}
                    </div>
                </div>
                <div className='card_info'>
                    {recipes.map((recipe) => (
                        <div className='recipeInfo'>
                            <ul className='firstRow'>
                                <li>Level: {recipe.level}</li>
                            </ul>
                            <ul className='secondRow'>
                                <li>Time: {recipe.time}</li>
                            </ul>
                            <ul className='thirdRow'>
                                <li>Calories: {recipe.calories}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='recipeBody'>
                    {recipes.map((recipe) => (
                        <>
                            <div className='bodyleft'>
                                <section>
                                    <header className='ingredientHeader'>
                                        Ingredients
                                    </header>
                                </section>
                                {recipe.ingredients.map((ingredient) => (
                                    <div className='ingredient'>{ingredient}</div>
                                ))}
                            </div>
                            <div className='bodyright'>
                                <section>
                                    <header className='instructionsHeader'>
                                        Instructions
                                    </header>
                                </section>
                                <div className='instructions'>{recipe.instructions}</div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Recepies;
