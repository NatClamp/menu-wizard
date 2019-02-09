import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AllRecipes from './components/AllRecipes';
import AddRecipe from './components/AddRecipe';
import SingleRecipe from './components/SingleRecipe';
import Menu from './components/Menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faTag } from '@fortawesome/free-solid-svg-icons';
library.add(faClock, faTag);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <AllRecipes path="/" />
          <SingleRecipe path="/recipes/:recipe_id" />
          <AddRecipe path="/add-recipe" />
          <Menu path="/menu" />
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
