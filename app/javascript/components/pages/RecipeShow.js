import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink, Redirect } from 'react-router-dom'
class RecipeShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      userrecipe: {

      }
    }
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRecipe(this.props.recipe)
    .then(() => {
      this.props.history.push("/userrecipes")
    })
  }
  
  
  
  render(){
    return (
	  <>
      <h2 className="show">Your Recipe Information</h2>
      <Col sm="6">
        <Card body className="show-card">
          <CardTitle>{ this.props.recipe.title }!</CardTitle>
            <CardText>This is a { this.props.recipe.diet_type } diet and will take { this.props.recipe.ready_in_minutes } minutes to make. <br/> <br/> You will need these ingredients: { this.props.recipe.ingredients }.<br/> <br/>Instructions: {this.props.recipe.instructions }</CardText>
            {this.props.logged_in &&
              <Button onClick={this.handleSubmit} className="add-button" color="success">
                Add recipe to your Saved Recipes
              </Button>
            }
        </Card>
      </Col>
      <div className="recipe-nav-links">
        <NavLink to ="/recipeindex">
          <Button className="nav-button" color="success">All Recipe Listings </Button>      
        </NavLink>
          {this.props.logged_in && <NavLink to ="/userrecipes">
          <Button className="nav-button" color = "warning">Your Saved Recipes</Button>
        </NavLink>}
        <NavLink to ="/recipe-keto">
          <Button className="nav-button" color="primary">Keto Listings</Button>      
        </NavLink>
        <NavLink to ="/recipe-med">
          <Button className="nav-button" color="primary">Mediterranean Listings</Button>      
        </NavLink>
        <NavLink to ="/recipe-vegan">
          <Button className="nav-button" color="primary">Vegan Listings</Button>      
        </NavLink>
        <NavLink to ="/recipe-gluten-free">
          <Button className="nav-button" color="primary">Gluten-Free Listings</Button>      
        </NavLink>   
      </div>
	  </>
    )
  }
}
export default RecipeShow 
