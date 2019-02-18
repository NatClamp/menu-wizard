import React, { Component } from 'react';
import './AddRecipe.css';
import Select from 'react-select';
// import * as api from '../api';

class AddRecipe extends Component {
  state = {
    units: [
      'item',
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
    const options = [
      { value: 'vegetarian', label: 'Vegetarian' },
      { value: 'quick', label: 'Quick' },
      { value: 'reheatable', label: 'Reheatable' },
    ];

    return (
      <main className="container">
        <h1 className="pageTitle">Submit recipe</h1>

        <form onSubmit={this.handleSubmit} className="addRecipeForm">
          <div className="addRecipeForm__section">
            <div className="addRecipeForm__section__group">
              <label className="formLabel" htmlFor="title">
                Recipe name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
                className="addRecipeForm__input"
                placeholder="What's the title of your recipe?"
              />
            </div>

            <div className="addRecipeForm__section__group">
              <label htmlFor="description" className="formLabel">
                Recipe description
              </label>
              <textarea
                value={this.state.description}
                name="description"
                onChange={this.handleChange}
                rows="5"
                id="description"
                className="addRecipeForm__textarea"
                placeholder="Share some information about your recipe"
              />
            </div>
          </div>
          <div className="addRecipeForm__section">
            <div className="addRecipeForm__section__group--inline">
              <label className="formLabel" htmlFor="prepTime">
                Prep time (mins):
              </label>
              <input
                type="number"
                name="prepTime"
                value={this.state.prepTime}
                onChange={this.handleChange}
                className="addRecipeForm__input addRecipeForm__input--inline"
                placeholder="mins"
              />
            </div>
            <div className="addRecipeForm__section__group--inline">
              <label className="formLabel" htmlFor="cookTime">
                Cook time (mins):
              </label>
              <input
                type="number"
                name="cookTime"
                value={this.state.cookTime}
                onChange={this.handleChange}
                placeholder="mins"
                className="addRecipeForm__input addRecipeForm__input--inline"
              />
            </div>

            <div className="addRecipeForm__section__group--inline">
              <label htmlFor="servings" className="formLabel">
                This recipe serves
              </label>
              <input
                type="number"
                name="servings"
                value={this.state.servings}
                onChange={this.handleChange}
                className="addRecipeForm__input addRecipeForm__input--inline"
              />
            </div>
          </div>

          <div className="addRecipeForm__section">
            <div className="addRecipeForm__section__group">
              <label className="formLabel">Original recipe reference</label>
              <input
                type="text"
                name="originalRef"
                value={this.state.originalRef}
                onChange={this.handleChange}
                className="addRecipeForm__input"
                placeholder="e.g. https://www.bbcgoodfood.com/recipes/satay-sweet-potato-curry"
              />
            </div>
          </div>

          <div className="addRecipeForm__section">
            <legend className="inputLegend">
              What ingredients do you need, and what quantity?
            </legend>

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

            <div className="ingredients__fields">
              <div className="ingredient">
                <label
                  htmlFor="newIngredientQuantity"
                  className="formLabel formLabel--small"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="newIngredientQuantity"
                  name="newIngredientQuantity"
                  value={this.state.newIngredientQuantity}
                  onChange={this.handleChange}
                  className="addRecipeForm__input"
                  placeholder="2"
                />
              </div>

              <div className="ingredient">
                <label
                  htmlFor="newIngredientQuantityUnit"
                  className="formLabel formLabel--small"
                >
                  Measurement
                </label>

                <select
                  name="newIngredientQuantityUnit"
                  id="newIngredientQuantityUnit"
                  value={this.state.newIngredientQuantityUnit}
                  onChange={this.handleChange}
                  className="addRecipeForm__select"
                >
                  <option defaultselected="true" hidden>
                    (none)
                  </option>
                  {this.state.units.map((unit, index) => {
                    return (
                      <option key={index} value={unit} id={unit}>
                        {unit}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="ingredientName">
                <label
                  htmlFor="newIngredient"
                  className="formLabel formLabel--small"
                >
                  Ingredient Name
                </label>
                <input
                  type="text"
                  id="newIngredient"
                  name="newIngredient"
                  value={this.state.newIngredient}
                  onChange={this.handleChange}
                  className="addRecipeForm__input"
                  placeholder="e.g. courgettes"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={this.handleIngredientChange}
              className="button button-addToRecipe"
            >
              Add ingredient to recipe
            </button>
          </div>

          <div className="addRecipeForm__section">
            <legend className="inputLegend">Add your method steps</legend>

            {this.state.method.length > 0 && (
              <ol>
                {this.state.method.map(step => {
                  return <li key={step.step}>{step.description}</li>;
                })}
              </ol>
            )}

            <div className="method">
              <label htmlFor="newStep" className="formLabel">
                Add a step
              </label>
              <input
                type="text"
                id="newStep"
                name="newStep"
                value={this.state.newStep}
                onChange={this.handleChange}
                className="addRecipeForm__input"
                placeholder="e.g. Chop the onions finely"
              />
            </div>

            <button
              type="button"
              onClick={this.handleMethodChange}
              className="button button-addToRecipe"
            >
              Add step to method
            </button>
          </div>

          <div className="addRecipeForm__section addRecipeForm__section--end">
            <div className="addRecipeform__section__group">
              <label htmlFor="tags" className="formLabel">
                Select tags for your recipe
              </label>
              <Select
                options={options}
                isMulti
                id="tags"
                className="basic-multi-select addRecipeForm__select"
                onChange={this.handleMultiSelect}
              />
            </div>
          </div>

          <div className="addRecipeForm__section addRecipeForm__section--end">
            <button type="submit" className="button button--submit">
              Submit
            </button>
          </div>
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

  handleMultiSelect = tags => {
    const tagNames = tags.map(tag => tag.value);
    this.setState({ tags: tagNames });
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
    console.log({
      name: this.state.title,
      description: this.state.description,
      ingredients: this.state.ingredients,
      method: this.state.method,
      servings: this.state.servings,
      preparationTime: this.state.prepTime,
      cookingTime: this.state.cookTime,
      tags: this.setState.tags,
      images: this.state.images,
      original_reference: this.state.originalRef,
    });
  };
}

export default AddRecipe;
