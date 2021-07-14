import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class RecipeIndex extends Component {
  render(){
    let { recipe } = this.props
    return (
	  <>
    <h2>All Diet Recipes</h2>
      <Col id="form">
        { recipe.map(recipe => {
        return (
        <Card body key={ recipe.id }>
          <CardTitle>
            <NavLink to={`/recipeshow/${recipe.id}`}>
            <h4>{ recipe.title }</h4>
            </NavLink>
          </CardTitle>
        </Card>
        )
        })}
        <NavLink to ="/">
          <Button id = "home-button" color="success">Home</Button>      
        </NavLink>
      </Col>
	  </>
    )
  }
}

export default RecipeIndex