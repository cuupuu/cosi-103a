import React from 'react';
import { useNavigate } from 'react-router-dom';
import recipes from './Recipe';
import Header from './Header';


export const Home = () => {
    const navigate = useNavigate();

    const goToRecipePage = (index) => {
        navigate(`/recipe/${index}`);
    };
    return (
        <div>
            <Header title="McDonald's Menu"/>
             {/* <Header title="McDonald's Menu" /> */}
            {/* <div className="header-navbar">
                <header>
                    <img src={"mcdicon.png"} alt="McDonald's Logo" className="header-img" />
                    <h1>McDonald's Menu</h1>
                    <Navbar />
                </header>

            </div> */}
            <main>
                <div className="recipe-grid">
                    {recipes.map((recipe) => (
                        <div className='recipe-card'>
                            <h2>{recipe.title}</h2>
                            <img src={recipe.image} alt={`Picture of ${recipe.title}`} />
                            <p className="description">{recipe.description}</p>
                            <button className="view-details-btn" onClick={() => goToRecipePage(recipe.index)}>View Details</button>
                        </div> 
                    ))}
                                                      
                </div>
            </main>
        </div>
    );
}