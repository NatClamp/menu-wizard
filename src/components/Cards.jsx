import React from 'react';
import { Link } from '@reach/router';
import './Cards.css';
import food from '../img/corn.jpg';

const Cards = props => {
  const { recipes } = props;
  return (
    <div className="recipeCardsContainer">
      {recipes.map(recipe => {
        return (
          <article className="card" key={recipe.id}>
            <section className="card_imageContainer">
              {/* <img src={`${recipe.image}`} alt="Recipe Image" /> */}
              <Link to={`/recipes/${recipe.id}`}>
                <img src={food} alt="food" className="card_image" />
              </Link>
            </section>
            <section className="card_infoContainer">
              <div className="card_title">
                <Link to={`/recipes/${recipe.id}`} className="navLink">
                  {recipe.name}
                </Link>
              </div>
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
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default Cards;
