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
        </Card>
        {this.props.logged_in &&
        <Button  onClick={this.handleSubmit}  className = "add-button" color = "success">Add recipe to your Saved Recipes</Button> }
      </Col>
      <NavLink to ="/recipeindex">
      <Button className="show-button" color="primary">All Recipe Listings </Button>      
      </NavLink>
      <NavLink to ="/userrecipes">
          <Button className = "show-button" color = "primary">Your Saved Recipes</Button>
      </NavLink>   
    
	  </>
    )
  }
}

export default RecipeShow 
