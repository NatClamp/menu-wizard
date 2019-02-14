import React, { Component } from 'react';
import './AddRecipe.css';

class AddRecipe extends Component {
  state = {
    units: [
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
            What ingredients do you need, and what quantity?
            <br />
            <input
              type="text"
              name="newIngredient"
              value={this.state.newIngredient}
              onChange={this.handleChange}
            />
            <br />
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
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target, value, name);
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

  handleSubmit = event => {
    event.preventDefault();
    console.log('submitting data!');
  };
}

export default AddRecipe;
