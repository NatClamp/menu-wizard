import React, { Component } from 'react';
import './FilterRecipes.css';

class FilterRecipes extends Component {
  state = {
    onlyVegetarian: false,
    onlyReheatable: false,
    onlyQuick: false,
  };
  render() {
    // const { reset } = this.props;
    return (
      <aside className="filterRecipesContainer">
        <div className="filterRecipes__title">Filter Recipes</div>
        <form className="filterRecipes__form" onSubmit={this.handleSubmit}>
          <label>
            Vegetarian
            <input
              name="onlyVegetarian"
              type="checkbox"
              checked={this.state.onlyVegetarian}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Reheatable
            <input
              name="onlyReheatable"
              type="checkbox"
              checked={this.state.onlyReheatable}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Quick
            <input
              name="onlyQuick"
              type="checkbox"
              checked={this.state.onlyQuick}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Filter</button>
          <button onClick={() => this.reset()}>Reset</button>
        </form>
      </aside>
    );
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { handleRecipeFilter } = this.props;
    event.preventDefault();
    const filters = [];
    if (this.state.onlyVegetarian === true) filters.push('vegetarian');
    if (this.state.onlyQuick === true) filters.push('quick');
    if (this.state.onlyReheatable === true) filters.push('reheatable');
    handleRecipeFilter(filters);
  };

  reset = () => {
    this.setState({
      onlyQuick: false,
      onlyReheatable: false,
      onlyVegetarian: false,
    });
  };
}

export default FilterRecipes;
