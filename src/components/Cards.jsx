import React from 'react';
import './Cards.css';

const Cards = props => {
  const { recipes } = props;
  return (
    <div className="recipeCardsContainer">
      {recipes.map(recipe => {
        return (
          <article className="card" key={recipe.id}>
            <div className="card_title">{recipe.name}</div>
            <div className="card_description">{recipe.description}</div>
            <div className="card_cookingTime">
              Cooking Time: {recipe.cookingTime} minutes
            </div>
            <div className="card_tags">
              {recipe.tags.map(tag => {
                return (
                  <p key={tag} className="card_tags_single">
                    {tag}
                  </p>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Cards;
