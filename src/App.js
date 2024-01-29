// App.js
import React from 'react';
import Recipe from './Recipe';
import './styles.css';

const App = () => {
    const recipes = [{
        title: "Spicy McCrispy™",
        image: require('./spicyMac.jpeg'),
        description: "Spicy Pepper Sauce topping the southern style fried chicken fillet on a toasted potato roll, crispy, juicy, tender and hot.",
        ingredients: [
            "4 boneless, skinless chicken breasts",
            "1 cup buttermilk",
            "1 cup all-purpose flour",
            "1 teaspoon paprika",
            "1 teaspoon garlic powder",
            "1 teaspoon cayenne pepper",
            "Salt and pepper to taste",
            "Vegetable oil for frying"
        ],
        instructions: [
            "1. Marinate chicken breasts in buttermilk for at least 1 hour.",
            "2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.",
            "3. Dredge marinated chicken in the flour mixture, ensuring even coating.",
            "4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.",
            "5. Drain on paper towels and serve hot."
        ]
    },
    {
      title: "Big Mac®",
      image: require('./bigMac.jpeg'),
      description: "A 100% beef burger with a taste like no other.",
      ingredients: [
          "4 boneless, skinless chicken breasts",
          "1 cup buttermilk",
          "1 cup all-purpose flour",
          "1 teaspoon paprika",
          "1 teaspoon garlic powder",
          "1 teaspoon cayenne pepper",
          "Salt and pepper to taste",
          "Vegetable oil for frying"
      ],
      instructions: [
          "1. Marinate chicken breasts in buttermilk for at least 1 hour.",
          "2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.",
          "3. Dredge marinated chicken in the flour mixture, ensuring even coating.",
          "4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.",
          "5. Drain on paper towels and serve hot."
      ]
    },
    {
      title: "Chicken McNuggets®",
      image: require('./chickenNuggets1.jpeg'),
      description: "Made with all white meat chicken and no artificial colors, flavors, or preservatives.",
      ingredients: [
          "4 boneless, skinless chicken breasts",
          "1 cup buttermilk",
          "1 cup all-purpose flour",
          "1 teaspoon paprika",
          "1 teaspoon garlic powder",
          "1 teaspoon cayenne pepper",
          "Salt and pepper to taste",
          "Vegetable oil for frying"
      ],
      instructions: [
          "1. Marinate chicken breasts in buttermilk for at least 1 hour.",
          "2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.",
          "3. Dredge marinated chicken in the flour mixture, ensuring even coating.",
          "4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.",
          "5. Drain on paper towels and serve hot."
      ]
    },
    {
      title: "Quarter Pounder with Cheese",
      image: require('./hamburger1.jpeg'),
      description: "A ¼ lb of 100% fresh beef that’s hot, deliciously juicy.",
      ingredients: [
          "4 boneless, skinless chicken breasts",
          "1 cup buttermilk",
          "1 cup all-purpose flour",
          "1 teaspoon paprika",
          "1 teaspoon garlic powder",
          "1 teaspoon cayenne pepper",
          "Salt and pepper to taste",
          "Vegetable oil for frying"
      ],
      instructions: [
          "1. Marinate chicken breasts in buttermilk for at least 1 hour.",
          "2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.",
          "3. Dredge marinated chicken in the flour mixture, ensuring even coating.",
          "4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.",
          "5. Drain on paper towels and serve hot."
      ]
    },
    {
      title: "Iced Coffee",
      image: require('./hamburger1.jpeg'),
      description: "Premium roast coffee, brewed from 100% Arabica beans, and ice cold water.",
      ingredients: [
          "4 boneless, skinless chicken breasts",
          "1 cup buttermilk",
          "1 cup all-purpose flour",
          "1 teaspoon paprika",
          "1 teaspoon garlic powder",
          "1 teaspoon cayenne pepper",
          "Salt and pepper to taste",
          "Vegetable oil for frying"
      ],
      instructions: [
          "1. Marinate chicken breasts in buttermilk for at least 1 hour.",
          "2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.",
          "3. Dredge marinated chicken in the flour mixture, ensuring even coating.",
          "4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.",
          "5. Drain on paper towels and serve hot."
      ]
    },
    {
      title: "Egg McMuffin®",
      image: require('./hamburger1.jpeg'),
      description: "Breakfast cravings with freshly cracked Grade A egg placed on a toasted English Muffin.",
      ingredients: [
          "4 boneless, skinless chicken breasts",
          "1 cup buttermilk",
          "1 cup all-purpose flour",
          "1 teaspoon paprika",
          "1 teaspoon garlic powder",
          "1 teaspoon cayenne pepper",
          "Salt and pepper to taste",
          "Vegetable oil for frying"
      ],
      instructions: [
          "1. Marinate chicken breasts in buttermilk for at least 1 hour.",
          "2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.",
          "3. Dredge marinated chicken in the flour mixture, ensuring even coating.",
          "4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.",
          "5. Drain on paper towels and serve hot."
      ]
    },
    {
      title: "Sausage Burrito",
      image: require('./hamburger1.jpeg'),
      description: "It's wrapped in a soft tortilla, making it the perfect grab and go breakfast.",
      ingredients: [
          "4 boneless, skinless chicken breasts",
          "1 cup buttermilk",
          "1 cup all-purpose flour",
          "1 teaspoon paprika",
          "1 teaspoon garlic powder",
          "1 teaspoon cayenne pepper",
          "Salt and pepper to taste",
          "Vegetable oil for frying"
      ],
      instructions: [
          "1. Marinate chicken breasts in buttermilk for at least 1 hour.",
          "2. In a bowl, combine flour, paprika, garlic powder, cayenne pepper, salt, and pepper.",
          "3. Dredge marinated chicken in the flour mixture, ensuring even coating.",
          "4. Heat vegetable oil in a pan and fry chicken until golden brown and cooked through.",
          "5. Drain on paper towels and serve hot."
      ]
    }
    
    ]  
    ;

    return (
        <div className="recipe-list">
           {recipes.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}
            {/* <Recipe {...recipe} /> */}

            </div>
    )
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
