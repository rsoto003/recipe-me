import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

class App extends Component {
  


  getRecipe = async (e) => {
    e.preventDefault();
    e.persist();
    const api_key = '0b526b6bb7c7894d4d0a76610cfb9129';
    const recipe_call = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=shredded%20chicken`);
    const recipe_data = await recipe_call.json();
    console.log(recipe_data)
    const recipeName = e.target.elements.recipe.value;
    e.target.elements.recipe.value = 'Search for another recipe...';
    console.log(recipeName);
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
