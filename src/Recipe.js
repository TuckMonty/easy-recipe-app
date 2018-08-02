import React, {Component} from 'react';
import PropTypes from 'prop-types'
import IngredientList from './IngredientList';

class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients:PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
        onDelete:PropTypes.func.isRequired
    }
    
    render() {
        
        const {title, img, instructions, ingredients, onDelete, id} = this.props;
        
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title}></img>
                </div>
                
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title} </h3>
                    
                    <h4>Ingredients:</h4>
                    <ul>
                        <IngredientList ingredients={ingredients}/>
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                    <button type="button" onClick={() => onDelete(id)}>DELETE</button>
                </div>
            </div>
        );
    }
}

export default Recipe;

//never return multiple jsx elements next to each other