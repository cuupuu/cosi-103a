// src/Recipe.js
import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


const Recipe = ({ title, description, ingredients, instructions, image }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={title}>
          {title}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={title}>
        <Card.Body>
          <img src={image} alt={`Picture of ${title}`} />
          <p className="description">{description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          {instructions.map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Recipe;
