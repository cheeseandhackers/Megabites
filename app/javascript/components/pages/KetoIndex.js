import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class KetoIndex extends Component {
  render(){
    let { keto } = this.props
    return (
	  <>
      <h2 className="show">Keto Diet Recipes</h2>
      <Col id="form">
        { keto.map(recipe => {
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
      <Button id = "keto-index-button" color="primary">Gluten-Free Listings </Button>      
      </NavLink>
      <NavLink to ="/recipe-med">
      <Button id = "keto-index-button" color="primary">Mediteranean Listings</Button>      
      </NavLink>
      <NavLink to ="/recipe-vegan">
      <Button id = "keto-index-button" color="primary">Vegan Listings</Button>      
      </NavLink>
	  </>
    )
  }
}

export default KetoIndex 