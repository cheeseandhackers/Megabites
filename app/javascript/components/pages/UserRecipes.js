import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class UserRecipes extends Component {
  render(){
    return (
	<>
    <h1>Your Saved Recipes</h1>
      <Col sm="6">
        <Card body>
          <CardTitle>{ this.props.recipe.title }!</CardTitle>
            <CardText></CardText>
        </Card>
      </Col>
      <NavLink to ="/recipeindex">
      <Button id = "index-button" color="success">Recipe Listings </Button>      
      </NavLink>
    

	</>
    )
  }
}

export default UserRecipes 