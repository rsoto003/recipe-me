import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

class App extends Component {
  getRecipe = (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipe.value;
    e.target.elements.recipe.value = '';
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
