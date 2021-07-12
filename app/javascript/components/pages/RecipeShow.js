import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class RecipeShow extends Component {
  render(){
    return (
	  <>
      <h1>Your Recipe Information</h1>
      <Col sm="6">
        <Card body>
          <CardTitle>{ this.props.recipe.title }!</CardTitle>
            <CardText>This is a { this.props.recipe.diet_type } diet and will take { this.props.recipe.ready_in_minutes } minutes to make. <br/> <br/> You will need these ingredients: { this.props.recipe.ingredients }.<br/> <br/>Instructions: {this.props.recipe.instructions } </CardText>
        </Card>
      </Col>
      <NavLink to ="/recipeindex">
      <Button id = "index-button" color="success">Recipe Listings </Button>      
      </NavLink>
	  </>
    )
  }
}

export default RecipeShow 