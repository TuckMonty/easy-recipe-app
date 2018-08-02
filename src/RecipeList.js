import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types'
import './RecipeList.css'

class RecipeApp extends Component {
    static propTypes = {
          recipes:PropTypes.arrayOf(PropTypes.string).isRequired,
          onDelete:PropTypes.func.isRequired
        }
        
  render() {
    const {onDelete} = this.props
    const recipes = this.props.recipes.map((recipe,index) => (
            <Recipe key={recipe.id} {...recipe} onDelete={onDelete} />
          ))
    
    return (
    <div className="recipe-list">
      {recipes}
          
    </div>
    );
  }
}

export default RecipeApp;

