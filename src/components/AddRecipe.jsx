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
        <h1 className="pageTitle">Add a recipe</h1>
        <form onSubmit={this.handleSubmit} className="addRecipeForm">
          <div className="addRecipeForm__section">
            <h2 className="formTitle">Title</h2>
            <div className="addRecipeForm__section__group">
              <label htmlFor="title">Recipe name</label>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
                className="addRecipeForm__input"
              />
            </div>
          </div>

          <br />

          <div className="addRecipeForm__section">
            <h2 className="formTitle">Description</h2>
            <div className="addRecipeForm__section__group">
              <label className="formTitle">Recipe description</label>
              <textarea
                value={this.state.description}
                name="description"
                onChange={this.handleChange}
                rows="5"
                id="description"
                className="addRecipeForm__textarea"
              />
            </div>
          </div>

          <br />
          {/* 
          <div className="addRecipeForm__section">
            <label>Preparation time (minutes):</label>
            <br />
            <input
              type="number"
              name="prepTime"
              value={this.state.prepTime}
              onChange={this.handleChange}
            />
          </div> */}

          <div className="addRecipeForm__section">
            <h2 className="formTitle">Timings</h2>

            <fieldset className="PrepTime__section">
              <legend className="radioLegend">Preparation Time</legend>
              <div className="radios">
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="prepTime10"
                    name="prepTime"
                    type="radio"
                    value="10"
                    checked={this.state.prepTime === '10'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="prepTime10">
                    1 - 10 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="prepTime20"
                    name="prepTime"
                    type="radio"
                    value="20"
                    checked={this.state.prepTime === '20'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="prepTime20">
                    11 - 20 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="prepTime30"
                    name="prepTime"
                    type="radio"
                    value="30"
                    checked={this.state.prepTime === '30'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="prepTime30">
                    21 - 30 minutes
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset className="cookTime__section">
              <legend className="radioLegend">Cooking Time</legend>
              <div className="radios">
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="cookTime10"
                    name="cookTime"
                    type="radio"
                    value="10"
                    checked={this.state.cookTime === '10'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="cookTime10">
                    1 - 10 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="cookTime20"
                    name="cookTime"
                    type="radio"
                    value="20"
                    checked={this.state.cookTime === '20'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="cookTime20">
                    11 - 20 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="cookTime30"
                    name="cookTime"
                    type="radio"
                    value="30"
                    checked={this.state.cookTime === '30'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="cookTime30">
                    21 - 30 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="cookTime40"
                    name="cookTime"
                    type="radio"
                    value="40"
                    checked={this.state.cookTime === '40'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="cookTime40">
                    31 - 40 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="cookTime50"
                    name="cookTime"
                    type="radio"
                    value="50"
                    checked={this.state.cookTime === '50'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="cookTime50">
                    41 - 50 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="cookTime60"
                    name="cookTime"
                    type="radio"
                    value="60"
                    checked={this.state.cookTime === '60'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="cookTime60">
                    51 - 60 minutes
                  </label>
                </div>
                <div className="radios__item">
                  <input
                    className="radios__input"
                    id="cookTime60+"
                    name="cookTime"
                    type="radio"
                    value="70"
                    checked={this.state.cookTime === '60+'}
                    onChange={this.handleChange}
                  />
                  <label className="radio__label" htmlFor="cookTime60+">
                    60+ minutes
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <br />

          {/* <div className="addRecipeForm__section">
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
          </div> */}

          <br />

          <div className="addRecipeForm__section">
            <h2 className="formTitle">Servings</h2>

            <div className="radios">
              <div className="radios__item">
                <input
                  className="radios__input"
                  id="servings1"
                  name="servings"
                  type="radio"
                  value="1"
                  checked={this.state.servings === '1'}
                  onChange={this.handleChange}
                />
                <label className="radio__label" htmlFor="servings1">
                  1 serving
                </label>
              </div>
              <div className="radios__item">
                <input
                  className="radios__input"
                  id="servings2"
                  name="servings"
                  type="radio"
                  value="2"
                  checked={this.state.servings === '2'}
                  onChange={this.handleChange}
                />
                <label className="radio__label" htmlFor="servings2">
                  2 servings
                </label>
              </div>
              <div className="radios__item">
                <input
                  className="radios__input"
                  id="servings4"
                  name="servings"
                  type="radio"
                  value="4"
                  checked={this.state.servings === '4'}
                  onChange={this.handleChange}
                />
                <label className="radio__label" htmlFor="servings4">
                  4 servings
                </label>
              </div>
              <div className="radios__item">
                <input
                  className="radios__input"
                  id="servingsParty"
                  name="servings"
                  type="radio"
                  value="party"
                  checked={this.state.servings === 'party'}
                  onChange={this.handleChange}
                />
                <label className="radio__label" htmlFor="servingsParty">
                  Party
                </label>
              </div>
            </div>
          </div>

          {/* <div className="addRecipeForm__section">
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
          </div>
          <br /> */}

          <div className="addRecipeForm__section">
            <h2 className="formTitle">Original recipe</h2>

            <div className="addRecipeForm__section__group">
              <label className="formTitle">Original recipe reference</label>
              <input
                type="text"
                name="originalRef"
                value={this.state.originalRef}
                onChange={this.handleChange}
                className="addRecipeForm__input"
              />
            </div>
          </div>

          <br />

          <div className="addRecipeForm__section">
            <h2 className="formTitle">Ingredients</h2>

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
                  className="formTitle formTitle--small"
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
                />
              </div>

              <div className="ingredient">
                <label
                  htmlFor="newIngredientQuantityUnit"
                  className="formTitle formTitle--small"
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
                    Choose a unit
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
                  className="formTitle formTitle--small"
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
                />
              </div>
            </div>

            <button
              type="button"
              onClick={this.handleIngredientChange}
              className="button"
            >
              Add ingredient to recipe
            </button>
          </div>

          <br />

          <div className="addRecipeForm__section">
            <h2 className="formTitle">Method</h2>
            <legend className="inputLegend">Add your method steps</legend>

            <br />

            {this.state.method.length > 0 && (
              <ol>
                {this.state.method.map(step => {
                  return <li key={step.step}>{step.description}</li>;
                })}
              </ol>
            )}

            <div className="method">
              <label htmlFor="newStep" className="formTitle">
                Add a step
              </label>
              <input
                type="text"
                id="newStep"
                name="newStep"
                value={this.state.newStep}
                onChange={this.handleChange}
                className="addRecipeForm__input"
              />
            </div>

            <button
              type="button"
              onClick={this.handleMethodChange}
              className="button"
            >
              Add step to method
            </button>
          </div>

          <br />

          <div className="addRecipeForm__section">
            <h2 className="formTitle">Tags</h2>
            <div className="addRecipeform__section__group">
              <label htmlFor="tags" className="formTitle">
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

          <br />
          <button type="submit" className="button button--submit">
            Submit
          </button>
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
    console.log('options selected: ', tagNames);
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
