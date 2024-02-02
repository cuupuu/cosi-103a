import React, {useState} from 'react';
import Recipe from './GotoRecipe';
import {Route, Routes} from 'react-router-dom';
import './Landing_page.css';



export const Home = () => {
    const [openRecipeIndex, setOpenRecipeIndex] = useState(null);
    const handleRecipeToggle = (index) => {
        setOpenRecipeIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const recipes = [
        {
            title: 'Spicy McCrispy™',
            description: "Spicy Pepper Sauce topping the southern style fried chicken fillet on a toasted potato roll, crispy, juicy, tender and hot.",
            image: 'SpicyCrispyChicken.jpeg',
        },
        {
            title: 'Big Mac®',
            description: 'A 100% beef burger with a taste like no other.',
            image: 'Header_BigMac.jpeg',
        },
        {
            title: 'McNuggets®',
            description: 'Made with all white meat chicken and no artificial colors, flavors, or preservatives.',
            image: 'McNuggets.jpeg',
        },
        {
            title: 'Quarter Pounder with Cheese',
            description: 'A ¼ lb of 100% fresh beef that’s hot, deliciously juicy.',
            image: 'QuarterPounderwithCheese.jpeg',
        },
        {
            title: 'Iced Coffee',
            description: 'Made with 100% Arabica beans, cream, and your choice of flavored coffee syrup—Caramel, Hazelnut, French Vanilla, and Sugar-Free French Vanilla.',
            image: 'MediumIcedCoffee.jpeg',
        },
        {
            title: 'Egg McMuffin',
            description: 'Breakfast cravings with freshly cracked Grade A egg placed on a toasted English Muffin.',
            image: 'EggMcMuffin.jpeg',
        },

        {
            title: 'Sausage Burrito',
            description: 'It\'s wrapped in a soft tortilla, making it the perfect grab and go breakfast.',
            image: 'SausageBurrito.jpeg',
        }

    ];

    return (
        <div className="App">
            <header>
                <h1>McDonald's Menu</h1>
            </header>
            <main>
                <div className="recipe-grid">
                    {recipes.map((recipe, index) => (
                        <Recipe
                            key={index}
                            index={index}
                            title={recipe.title}
                            description={recipe.description}
                            ingredients={recipe.ingredients}
                            instructions={recipe.instructions}
                            image={recipe.image}
                            isOpen={index === openRecipeIndex}
                            onToggle={handleRecipeToggle} // Assuming Recipe has a toggle
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};
