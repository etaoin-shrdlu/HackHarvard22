import React, { useState } from 'react';
import picture from '../strawberry.png';
import './Recepies.css';
import { useLocation } from "react-router-dom";
import skill_icon from '../skill-icon.png';
import time_icon from '../clock-icon.png';
import kcal_icon from '../calories-icon.png';

var recipes; //last-minute change

function Recepies() {
    /*
    let [recipes, setRecipes] = useState([
        {
            name: "Strawberry Cheesecake",
            url: picture,
            time: "30 minutes",
            tags: ["Strawberry", "America", "Dessert"],
            ingredients: ["cream", "butter", "cheese", "egg", "vanilla", "strawberry"],
            instructions: "1. Mix all ingredients together. 2. Bake for 30 minutes. 3. Enjoy!",
            calories: 400,
            level: "easy",
        },
    ]);
    */

    const BACKEND_URL = 'http://127.0.0.1:8000/';

    const search = useLocation().search;
    let cuisine = new URLSearchParams(search).get('cuisine');
    let meal_category = new URLSearchParams(search).get('meal');

    console.log(cuisine);
    console.log(meal_category)

    let url_data = null;
    
    recipes = 
        [
            {
                name: "Chocolte Chip Cookies",
                url: picture,
                time: "20 minutes",
                tags: ["#Chocolate", "American", "Dessert"],
                ingredients: ["cream", "butter", "cheese", "egg", "vanilla", "strawberry"],
                instructions: "1. Mix all ingredients together. \n\n\n2. Bake for 30 minutes. \n\n\n3. Enjoy!",
                calories: 400,
                level: "easy",
            }
            // These have all the elements of the perfect cookie with a soft and moist center melty morsels of chocolate and crisp edges. Best of all there's no chilling or refrigeration required so you can satisfy that cookie craving when it strikes!,[1 cup: unsalted butter; 0.5 cup: granulated sugar; 1 cup: light sugar; 2: large eggs; 2 tsp: vanilla extract; 3 cups: all purpose flour; 1 tsp: baking soda; 1 tsp: salt; 2 cups: semi-sweet chocolate chips],[Preheat oven to 350F. Line a baking sheet with parchment or Silpat liner. In the bowl of a stand mixer with paddle attachment; combine 2 sticks of butter; 1 cup of packed brown sugar and 1/2 cup of white sugar. Beat 5 minutes on medium/high speed until creamy and light; scraping down the bowl as needed.; Add 2 eggs; one at a time; beating well with each addition; scraping down the bowl as needed; then beat in 2 tsp of vanilla.; In a separate bowl; combine 3 cups of flour; 1 tsp salt; and 1 tsp of baking soda (sifted to eliminate lumps). Add the flour mixture to the creamed butter in thirds; mixing to incorporate with each addition. Fold in 2 cups of chocolate chips.; Use an ice cream scoop to get even balls of dough (3 Tbsp each). Place scoops of dough onto lined baking sheet about 2 inches apart. Mine fit onto 3 cookie sheets and made 26 cookies. Roll balls lightly with your hands then stud tops of cookie balls with reserved chocolate chips. Bake right away or cover and refrigerate until ready to bake.; Bake one cookie sheet at a time for 12-15 min at 350˚F (we bake 12 minutes); until edges are just turning golden. The tops should still look under-baked. Allow cookies to cool on the baking sheet 5 min then transfer to a rack to cool.],250,20,Dessert,General,Intermediate

        ] // default value for debbugging
    
    fetch(BACKEND_URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
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
                            <img src={skill_icon} width='30' height='30' />
                            <p>
                                {recipe.level}&emsp;&emsp;&emsp;
                            </p>
                            <img src={time_icon} width='20' height='20' />
                            <p>
                                {recipe.time} minutes&emsp;&emsp;
                            </p>
                            <img src={kcal_icon} width='20' height='20' />
                            <p>
                                {recipe.calories} kcal
                            </p>
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
                                <ul>
                                    {recipe.ingredients.map((ingredient) => (
                                        <li className='ingredient'>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='bodyright'>
                                <section>
                                    <header className='instructionsHeader'>
                                        Instructions
                                    </header>
                                </section>
                                <div className='instructions'><p>{recipe.instructions}</p></div>
                            </div>
                        </>
                    ))}
                </div>
                <div class='break'></div>
            </div>
            
        </>
    );
}

export default Recepies;
