import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class GlutenIndex extends Component {
  render(){
    let { glutenFree } = this.props
    return (
	  <>
      <h2 className="show">Gluten-Free Diet Recipes</h2>
      <Col sm="6">
        { glutenFree.map(recipe => {
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
        <NavLink to="/">
          <Button className="nav-button" color="success">Home</Button>      
        </NavLink>
        {this.props.logged_in && <NavLink to ="/userrecipes">
          <Button className="nav-button" color = "warning">Your Saved Recipes</Button>
        </NavLink>}
        <NavLink to="/recipe-keto">
          <Button className="nav-button" color="primary">Keto Listings</Button>      
        </NavLink>
        <NavLink to="/recipe-med">
          <Button className="nav-button" color="primary">Mediterranean Listings</Button>      
        </NavLink>
        <NavLink to="/recipe-vegan">
          <Button className="nav-button" color="primary">Vegan Listings</Button>      
        </NavLink>
      </div>
	  </>
    )
  }
}

export default GlutenIndex 