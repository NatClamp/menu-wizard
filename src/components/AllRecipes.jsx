import React, { Component } from 'react';
import './AllRecipes.css';
import Cards from './Cards';
import FilterRecipes from './FilterRecipes';
import PageNav from './PageNav';
import * as api from '../api';

class AllRecipes extends Component {
  state = {
    isLoading: true,
    err: null,
    recipes: [],
    totalRecipes: 0,
    currentPage: 1,
    pageNums: [1],
    filters: [],
  };
  render() {
    const { recipes, currentPage, pageNums } = this.state;
    return (
      <div className="allRecipesContainer">
        <main>
          <Cards recipes={recipes} />
          <PageNav
            currentPage={currentPage}
            pageNums={pageNums}
            handlePageChange={this.handlePageChange}
          />
        </main>
        <FilterRecipes handleRecipeFilter={this.handleRecipeFilter} />
      </div>
    );
  }

  handlePageChange = event => {
    this.setState({
      currentPage: event.target.id,
    });
  };

  fetchRecipes = () => {
    this.setState({ isLoading: true });
    api
      .getRecipes()
      .then(data => {
        const recipes =
          this.state.filters.length > 0
            ? data.recipes.filter(recipe => {
                const superset = recipe.tags;
                const subset = this.state.filters;
                return subset.every(tag => superset.indexOf(tag) >= 0);
              })
            : data.recipes;
        this.setState({
          totalRecipes: data.totalRecipes,
          recipes: recipes,
          isLoading: false,
        });
        this.getPageNumbers();
      })
      .catch(err => this.setState({ err }));
  };

  getPageNumbers = () => {
    const pageNums = [1];
    for (let i = 2; i <= Math.ceil(this.state.totalRecipes / 10); i++) {
      pageNums.push(i);
    }
    this.setState({ pageNums });
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      this.fetchRecipes();
    }
  }

  handleRecipeFilter = filters => {
    this.setState({ filters });
  };
}

export default AllRecipes;
