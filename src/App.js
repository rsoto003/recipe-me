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
    const recipe_call = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=15`);
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
        <div className="container">
        <div className="row col-xl-12 mt-3">
            {this.state.recipes.map( recipe => {
              return <div className="col-md-6 col-lg-4 col-xl-4 col-sm-6 col-xs-6" key={recipe.recipe_id}>
                        <div className="card mb-3">
                        <img className="card-img-top" src={recipe.image_url} alt={recipe.publisher}/>
                        <div className="card-body">
                          <h5 className="card-title"> {recipe.title}</h5>
                          <a className="btn btn-info" href={recipe.source_url}>Recipe Me!</a>
                        </div>
                      </div>
                     </div>
            })}
          
        </div>
        </div>
      </div>
    );
  }
}

export default App;
