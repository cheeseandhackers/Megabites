import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class RecipeIndex extends Component {
  render(){
    let { recipe } = this.props
    return (
	  <>
    <h2 className="show">All Diet Recipes</h2>
    
      <Col sm="6">
        { recipe.map(recipe => {
        return (
        <Card body key={ recipe.id } className="recipe-index">
          <CardTitle>
            <NavLink to={`/recipeshow/${recipe.id}`}>
            <h4>{ recipe.title }</h4>
            </NavLink>
          </CardTitle>
        </Card>
        )
        })}
      </Col>
      <div className="recipe-nav-links">
        <NavLink to ="/">
          <Button className="nav-button" color="success">Home</Button>      
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

export default RecipeIndex