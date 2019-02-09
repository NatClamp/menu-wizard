import React, { Component } from 'react';
import './FilterRecipes.css';

class FilterRecipes extends Component {
  state = {
    onlyVegetarian: false,
    onlyReheatable: false,
    onlyQuick: false,
  };
  render() {
    return (
      <aside className="filterRecipesContainer">
        <form className="filterRecipes__form" onSubmit={this.handleSubmit}>
          <div className="filterRecipes__title">Filter Recipes</div>
          <div className="filterRecipes__form__choice">
            <label className="form__label">
              <input
                name="onlyVegetarian"
                type="checkbox"
                checked={this.state.onlyVegetarian}
                onChange={this.handleInputChange}
                className="checkbox"
              />
              Vegetarian
            </label>
          </div>
          <div className="filterRecipes__form__choice">
            <label className="form__label">
              <input
                name="onlyReheatable"
                type="checkbox"
                checked={this.state.onlyReheatable}
                onChange={this.handleInputChange}
                className="checkbox"
              />
              Reheatable
            </label>
          </div>

          <div className="filterRecipes__form__choice">
            <label className="form__label">
              <input
                name="onlyQuick"
                type="checkbox"
                checked={this.state.onlyQuick}
                onChange={this.handleInputChange}
                className="checkbox"
              />
              Quick
            </label>
          </div>

          <button type="submit" className="filterRecipes__form__button">
            Filter
          </button>
          <button
            onClick={() => this.reset()}
            className="filterRecipes__form__button"
          >
            Reset
          </button>
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
