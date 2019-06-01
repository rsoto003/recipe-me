import React, { Component } from 'react';

class Form extends Component {
    render(props){
        return (
            <form className="input-group mb-3 col-xl-4 mt-3" onSubmit={this.props.getRecipe}>
                <input className="form-control" placeholder="Find a recipe..." type="text" name="recipe"/>
                <div className="input-group-append">
                    <button className="btn btn-secondary"  type="submit">Search</button>
                </div>
            </form>
        );
    }
}
export default Form;