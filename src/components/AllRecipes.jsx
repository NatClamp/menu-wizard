import React, { Component } from 'react';
import './AllRecipes.css';
import Cards from './Cards';
import FilterRecipes from './FilterRecipes';
import PageNav from './PageNav';

class AllRecipes extends Component {
  state = {
    recipes: [
      {
        id: 'abcde-1234-abc-1244',
        name: 'My Recipe',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76763',
        name: 'Ham and Eggs',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1245',
        name: 'My Recipe',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76764',
        name: 'Ham and Eggs',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1246',
        name: 'My Recipe',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76765',
        name: 'Ham and Eggs',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1247',
        name: 'My Recipe',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76766',
        name: 'Ham and Eggs',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1248',
        name: 'My Recipe',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76767',
        name: 'Ham and Eggs',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1249',
        name: 'My Recipe',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76768',
        name: 'Ham and Eggs',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
    ],
    totalRecipes: 12,
    currentPage: 1,
    pageNums: [],
  };
  render() {
    const { recipes, currentPage, totalRecipes, pageNums } = this.state;
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
        <FilterRecipes />
      </div>
    );
  }

  handlePageChange = event => {
    this.setState({
      currentPage: event.target.id,
    });
  };

  componentDidMount() {
    const pageNums = [];
    for (let i = 1; i <= Math.ceil(this.state.totalRecipes / 10); i++) {
      pageNums.push(i);
    }
    this.setState({ pageNums });
  }
}

export default AllRecipes;
