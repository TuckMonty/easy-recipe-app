import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IngredientList extends Component {
    static propTypes = {
        ingredients: PropTypes.arrayOf(PropTypes.string)
                               .isRequired
    }
    render() {
        return (
            <ul>
                {this.props.ingredients.map((ing,index) => (
                    <li key={index}>{ing}</li>
                ))}
            </ul>
         )
    } 
}

export default IngredientList;