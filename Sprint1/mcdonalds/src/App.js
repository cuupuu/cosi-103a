// src/App.js
import React, {useState} from 'react';
import Recipe from './Recipe';
const App = () => {
    const [openRecipeIndex, setOpenRecipeIndex] = useState(null);
    const handleRecipeToggle = (index) => {
        setOpenRecipeIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const recipes = [
        {
            title: 'Spicy McCrispy™',
            description: "Spicy Pepper Sauce topping the southern style fried chicken fillet on a toasted potato roll, crispy, juicy, tender and hot.",
            ingredients: [
                '4 boneless, skinless chicken breasts',
                '1 cup buttermilk',
                '1 cup all-purpose flour',
                '1 teaspoon paprika',
                '1 teaspoon garlic powder',
                '1 teaspoon cayenne pepper',
                'Salt and pepper to taste',
                'Vegetable oil for frying',
            ],
            instructions: [
                '1. Marinate chicken breasts in buttermilk for at least 1 hour.',
                '2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.',
                '3. Dredge marinated chicken in the flour mixture, ensuring even coating.',
                '4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.',
                '5. Drain on paper towels and serve hot.',
            ],
            image: 'SpicyCrispyChicken.jpeg',
        },
        {
            title: 'Big Mac®',
            description: 'A 100% beef burger with a taste like no other.',
            ingredients: [
                '2 beef patties',
                'Special sauce',
                'Shredded lettuce',
                'Sliced American cheese',
                'Pickles',
                'Chopped onions',
                'Sesame seed bun',
            ],
            instructions: [
                '1. Cook the beef patties until fully cooked.',
                '2. Toast the sesame seed bun.',
                '3. Assemble the burger by placing special sauce on the bottom bun, followed by lettuce, a beef patty, cheese, pickles, onions, another beef patty, and the top bun.',
                '4. Serve and enjoy your delicious Big Mac!',
            ],
            image: 'Header_BigMac.jpeg',
        },
        {
            title: 'McNuggets®',
            description: 'Made with all white meat chicken and no artificial colors, flavors, or preservatives.',
            ingredients: [
                '4 chicken breasts',
                '1 egg',
                '1 cup milk',
                '2 cups flour',
                '2 tablespoons powdered sugar',
                '2 teaspoons salt',
                '1 teaspoon pepper',
                'Vegetable oil for frying',
            ],
            instructions: [
                '1. Cut chicken breasts into 2-inch pieces.',
                '2. In a bowl, combine flour, powdered sugar, salt, and pepper.',
                '3. In a separate bowl, whisk together egg and milk.',
                '4. Dip chicken pieces into the egg mixture, then coat in the flour mixture.',
                '5. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.',
                '6. Drain on paper towels and serve hot.',
            ],
            image: 'McNuggets.jpeg',
        },
        {
            title: 'Quarter Pounder with Cheese',
            description: 'A ¼ lb of 100% fresh beef that’s hot, deliciously juicy.',
            ingredients: [
                '1/4 lb ground beef patty',
                'Slice of cheddar cheese',
                'Fresh lettuce leaves',
                'Sliced tomatoes',
                'Pickle slices',
                'Chopped onions',
                'Ketchup',
                'Mustard',
                'Sesame seed bun',
            ],
            instructions: [
                '1. Grill the beef patty to perfection.',
                '2. Add a slice of cheddar cheese on top of the patty and let it melt.',
                '3. Toast the sesame seed bun.',
                '4. Assemble the burger with lettuce, tomatoes, pickles, onions, ketchup, and mustard.',
                '5. Place the cheesy beef patty on the bottom half of the bun and cover with the top half.',
                '6. Indulge in the savory goodness of the Quarter Pounder with Cheese!',
            ],
            image: 'QuarterPounderwithCheese.jpeg',
        },
        {
            title: 'Iced Coffee',
            description: 'Made with 100% Arabica beans, cream, and your choice of flavored coffee syrup—Caramel, Hazelnut, French Vanilla, and Sugar-Free French Vanilla.',
            ingredients: [
                'Freshly brewed coffee',
                'Ice cubes',
                'Sweetener (optional)',
                'Cream or milk (optional)',
            ],
            instructions: [
                '1. Brew a fresh pot of coffee and let it cool to room temperature.',
                '2. Fill a glass with ice cubes.',
                '3. Pour the cooled coffee over the ice cubes.',
                '4. Add sweetener to taste (if desired).',
                '5. Optionally, add cream or milk for a creamy texture.',
                '6. Stir well and enjoy the invigorating taste of our Iced Coffee!',
            ],
            image: 'MediumIcedCoffee.jpeg',
        },
        {
            title: 'Egg McMuffin',
            description: 'Breakfast cravings with freshly cracked Grade A egg placed on a toasted English Muffin.',
            ingredients: [
                'English muffins, split and toasted',
                'Large eggs',
                'Canadian bacon slices',
                'American cheese slices',
                'Butter',
                'Salt and pepper to taste',
            ],
            instructions: [
                '1. Heat a non-stick skillet over medium heat and melt a bit of butter.',
                '2. Crack an egg into the skillet and cook until the whites are set but the yolk is still runny. Season with salt and pepper.',
                '3. While the egg is cooking, toast the English muffin halves.',
                '4. Place a slice of Canadian bacon on the bottom half of each English muffin.',
                '5. Once the egg is cooked, place it on top of the Canadian bacon.',
                '6. Add a slice of American cheese on top of the egg.',
                '7. Top with the other half of the English muffin, and your Egg McMuffin is ready to enjoy!',
            ],
            image: 'EggMcMuffin.jpeg',
        },

        {
            title: 'Sausage Burrito',
            description: 'It\'s wrapped in a soft tortilla, making it the perfect grab and go breakfast.',
            ingredients: [
                'Sausage links, cooked and sliced',
                'Scrambled eggs',
                'Shredded cheese',
                'Salsa',
                'Flour tortillas',
            ],
            instructions: [
                '1. Cook and slice the sausage links.',
                '2. Scramble the eggs in a pan until cooked through.',
                '3. Warm the flour tortillas in a microwave or on a skillet.',
                '4. Assemble the burrito by placing scrambled eggs, sausage slices, shredded cheese, and salsa in the center of each tortilla.',
                '5. Fold the sides of the tortilla inward and then roll it up tightly.',
                '6. Serve warm and savor the deliciousness of our Sausage Burrito!',
            ],
            image: 'SausageBurrito.jpeg',
        }

    ];

    return (
        <div className="App">
            <header>
                <h1>Recipe App</h1>
            </header>
            <main>
                <div className="recipe-list">
                    {recipes.map((recipe, index) => (
                        <Recipe
                            index={index}
                            title={recipe.title}
                            description={recipe.description}
                            ingredients={recipe.ingredients}
                            instructions={recipe.instructions}
                            image={recipe.image}
                            isOpen={index === openRecipeIndex}
                            onToggle={handleRecipeToggle}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default App;