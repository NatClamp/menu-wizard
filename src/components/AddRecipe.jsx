import React, { Component } from 'react';
import './AddRecipe.css';
// import * as api from '../api';

class AddRecipe extends Component {
  state = {
    units: [
      'unit',
      'tsp',
      'tbsp',
      'fl oz',
      'cup',
      'pint',
      'ml',
      'litre',
      'lb',
      'oz',
      'mg',
      'g',
      'kg',
    ],
    title: '',
    description: '',
    prepTime: '',
    cookTime: '',
    ingredients: [],
    newIngredient: '',
    newIngredientQuantity: '',
    newIngredientQuantityUnit: '',
    method: [],
    newStep: '',
    stepCount: 1,
    servings: '',
    tags: [],
    images: [],
    originalRef: '',
  };
  render() {
    return (
      <main className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            What's the name of your recipe?
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Provide a short description of the recipe:
            <br />
            <textarea
              value={this.state.description}
              name="description"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Preparation time (minutes):
            <br />
            <input
              type="number"
              name="prepTime"
              value={this.state.prepTime}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Cooking time (minutes):
            <br />
            <input
              type="number"
              name="cookTime"
              value={this.state.cookTime}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Servings:
            <br />
            <input
              type="number"
              name="servings"
              value={this.state.servings}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Original Reference:
            <br />
            <input
              type="text"
              name="originalRef"
              value={this.state.originalRef}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            What ingredients do you need, and what quantity?
            <br />
            {this.state.ingredients.length > 0 && (
              <ul>
                {this.state.ingredients.map(ingredient => {
                  return (
                    <li key={ingredient.name}>
                      {ingredient.name}, {ingredient.quantity}
                    </li>
                  );
                })}
              </ul>
            )}
            <input
              type="text"
              name="newIngredient"
              value={this.state.newIngredient}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="newIngredientQuantity"
              value={this.state.newIngredientQuantity}
              onChange={this.handleChange}
            />
            <select
              value={this.state.newIngredientQuantityUnit}
              onChange={this.handleUnitChange}
            >
              {this.state.units.map(unit => {
                return (
                  <option
                    key={unit}
                    value={unit}
                    name="newIngredientQuantityUnit"
                  >
                    {unit}
                  </option>
                );
              })}
            </select>
            <button type="button" onClick={this.handleIngredientChange}>
              +
            </button>
          </label>
          <br />

          <label>
            What are the steps to make your recipe?
            <br />
            {this.state.method.length > 0 && (
              <ol>
                {this.state.method.map(step => {
                  return <li key={step.step}>{step.description}</li>;
                })}
              </ol>
            )}
            <input
              type="text"
              name="newStep"
              value={this.state.newStep}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleMethodChange}>
              +
            </button>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleUnitChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({
      newIngredientQuantityUnit: value,
    });
  };

  handleIngredientChange = event => {
    const newIngredient = {
      name: this.state.newIngredient,
      quantity: `${this.state.newIngredientQuantity} ${
        this.state.newIngredientQuantityUnit
      }`,
    };
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, newIngredient],
      newIngredientQuantityUnit: '',
      newIngredientQuantity: '',
      newIngredient: '',
    }));
  };

  handleMethodChange = () => {
    const newStep = {
      step: this.state.stepCount,
      description: this.state.newStep,
    };
    this.setState(prevState => ({
      method: [...prevState.method, newStep],
      newStep: '',
      stepCount: prevState.stepCount + 1,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('submitting data!');
    // api.postRecipe({
    //   name: this.state.title,
    //   description: this.state.description,
    //   ingredients: this.state.ingredients,
    //   method: this.state.method,
    //   servings: '',
    //   preparationTime: this.state.prepTime,
    //   cookingTime: this.state.cookTime,
    //   tags: [],
    //   images: '',
    //   original_reference: '',
    // });
  };
}

export default AddRecipe;
