import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class MedIndex extends Component {
  render(){
    let { med } = this.props
    return (
	  <>
      <h2 className="show">Mediterranean Diet Recipes</h2>
      <Col id="form">
        { med.map(recipe => {
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
        <NavLink to ="/">
          <Button id = "home-button" color="success">Home</Button>      
        </NavLink>
      </Col>
      <NavLink to ="/recipe-gluten-free">
      <Button id = "index-button" color="primary">Gluten-Free Listings </Button>      
      </NavLink>
      <NavLink to ="/recipe-keto">
      <Button id = "index-button" color="primary">Keto Listings</Button>      
      </NavLink>
      <NavLink to ="/recipe-vegan">
      <Button id = "index-button" color="primary">Vegan Listings</Button>      
      </NavLink>
	  </>
    )
  }
}

export default MedIndex 