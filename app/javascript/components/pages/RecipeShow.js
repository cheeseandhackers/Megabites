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
    console.log(this.props)
    this.props.addRecipe(this.props.recipe)
    // this.setState({ userrecipes: userrecipes})
  }
  
  
  
  render(){
    return (
	  <>
      <h1>Your Recipe Information</h1>
      <Col sm="6">
        <Card body>
          <CardTitle>{ this.props.recipe.title }!</CardTitle>
            <CardText>This is a { this.props.recipe.diet_type } diet and will take { this.props.recipe.ready_in_minutes } minutes to make. <br/> <br/> You will need these ingredients: { this.props.recipe.ingredients }.<br/> <br/>Instructions: {this.props.recipe.instructions }</CardText>
        </Card>
        <Button  onClick={this.handleSubmit}id = "add-button" color = "success">Add recipe to your Saved Recipes</Button>
      </Col>
      <NavLink to ="/recipeindex">
      <Button id = "index-button" color="success">Recipe Listings </Button>      
      </NavLink>
      {this.state.success && <Redirect to = "/userrecipes" />}
	  </>
    )
  }
}

export default RecipeShow 