import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput'
import Navbar from './Navbar';
import './Recipe.css';
import './RecipeApp.css';

class RecipeApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
    recipes : [
        {
          id:0,
          title:"Cheesey Spaghetti",
          ingredients:["flour","water","cheese"],
          img:"https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de4ff3558258d5972b83cec5c963208b&auto=format&fit=crop&w=400&q=60",
          instructions:"Mix Ingredients"
        },
        {
          id:1,
          title:"Fried Rice",
          ingredients:["Rice","Mixed Vegetables", "Lemon"],
          img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b647887af149d9148b31248073e84f&auto=format&fit=crop&w=400&q=60",
          instructions:"Fry rice in pan, squeeze lemon over rice, mix"
        },
        {
          id:2,
          title:"Cereal",
          ingredients:["Ceral","Milk","Sugar"],
          img:"https://images.unsplash.com/photo-1493696862352-d2d955ffb328?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ad54f6d4ca13da1116dbe991961cfb2&auto=format&fit=crop&w=1051&q=80",
          instructions:"Pour cereal into bowl, pour milk over ceral, sprinkle sugar over cereal"
        },
        {
          id:3,
          title:"Roast Beef Sandwich",
          ingredients:["Bun",'Roast Beef','Tomato','Mayo'],
          img:"https://images.unsplash.com/photo-1506027497629-626def8ddb41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17140db7130108e8bc86f76d208ba134&auto=format&fit=crop&w=1050&q=80",
          instructions:"Put beef and tomato on bun, spread mayo"
        },
        {
          id:4,
          title:"Popcorn",
          ingredients:["Popcorn"],
          img:"https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc038123dbad3582ec68e4423144406e&auto=format&fit=crop&w=1052&q=80",
          instructions:"Put pocorn in popcorn maker"
        },
        {
          id:5,
          title:"Milkshake",
          ingredients:["Milk",'Ice Cream','Cinnamon'],
          img:"https://images.unsplash.com/photo-1473115209096-e0375dd6b3b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0226b2a186031f765d4b50563b81d7a&auto=format&fit=crop&w=1050&q=80",
          instructions:"Mix milk and ice cream in a blender, drizzle cinnamon on top"
        }
      ],
      nextRecipeId:6,
      showForm:false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  componentDidMount() {
    document.title = "Easy Recipe App"
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipie = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId +1,
        recipes:[...this.state.recipes, newRecipie],
        showForm:false
      }
    })
  }
  
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes})
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm:true})}/>
        {showForm ? 
          <RecipeInput 
            onSave={this.handleSave} 
            onClose={() => this.setState({showForm:false})}
          />: null 
        }
        <RecipeList recipes={this.state.recipes}
                    onDelete={this.onDelete}/>
        
          
        
      </div>
    );
  }
}

export default RecipeApp;
