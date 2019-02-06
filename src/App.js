import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AllRecipes from './components/AllRecipes';
import AddRecipe from './components/AddRecipe';
import SingleRecipe from './components/SingleRecipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <AllRecipes path="/" />
          <SingleRecipe path="/recipes/:recipe_id" />
          <AddRecipe path="/add-recipe" />
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
