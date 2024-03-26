import React ,{ useContext } from 'react';
import { FoodDetailsContext } from './FoodDetailsContext'; 
import Header from './Header';
import './IngredientDetails.css';

const IngredientDetails = () => {
    const {foodDetails} = useContext(FoodDetailsContext);
    console.log("Got Recipe", foodDetails);
    let extractedData = null;
    if(foodDetails){
        extractedData = {
            foodNutrients: foodDetails.foodNutrients.map(nutrient => ({
                name: nutrient.name,
                amount: nutrient.amount,
                unitName: nutrient.unitName
            }))
        }
    }
    JSON.stringify(extractedData);

    return (
        <div>
            <Header title="Ingredient Details"/>
            <div class="ingredient-container">
            <h1 class="ingredient-title">Nutrition Facts</h1>
            {foodDetails && (
                <div>
                    <h2 class="ingredient-subtitle">{foodDetails.description}</h2>
                    <ul class="ingredient-ul">
                        {extractedData.foodNutrients.map((nutrient, index) => (
                            <li class = "ingredient-li" key={index}>
                                {nutrient.name}: {nutrient.amount} {nutrient.unitName}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>

        </div>
    );
};

export default IngredientDetails;