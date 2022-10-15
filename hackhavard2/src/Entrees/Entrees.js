import React, { useState } from 'react';
import picture from '../logo.png';
import './Entrees.css';

function Entrees() {
    const [recipes, setRecipes] = useState([
        {
            name: "Chicken Parmesan",
            url: picture,
            time: "30 minutes",
            tags: ["chicken", "italian", "dinner"],
            ingredients: ["chicken", "tomato sauce", "cheese", "pasta"],
            instructions: "1. Cook the chicken. 2. Cook the pasta. 3. Mix the chicken and pasta. 4. Add tomato sauce and cheese. 5. Enjoy!",
            calories: 500,
            level: "easy",
        },
    ]);

    return (
        <>
            <div>
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
                                <div className='ingredients'>{recipe.ingredients}</div>
                            </div>
                            <div className='bodyright'>
                                <div className='instructions'>Instructions: {recipe.instructions}</div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Entrees;