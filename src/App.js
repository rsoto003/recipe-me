import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    e.preventDefault();
    e.persist();
    const api_key = '0b526b6bb7c7894d4d0a76610cfb9129';
    const recipeName = e.target.elements.recipe.value;
    const recipe_call = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=30`);
    const recipe_data = await recipe_call.json();
    // console.log(recipe_data.recipes[0].recipe_id);
    this.setState({
      recipes: recipe_data.recipes
    });

    // console.table(this.state.recipes);
    console.log(this.state.recipes)

    e.target.elements.recipe.value = 'Search for another recipe...';
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Form getRecipe={this.getRecipe}/>
        { this.state.recipes.map( (recipe) => {
          return <div key={recipe.recipe_id} className="row">
                <div className="card col-xl-4 col-lg-4 col-md-6">
                  <img src={recipe.image_url} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text"></p>
                    <a href={recipe.source_url} className="btn btn-primary">I'm eating this!</a>
                  </div>
                </div>
          </div>
        }) }
      </div>
    );
  }
}

export default App;
