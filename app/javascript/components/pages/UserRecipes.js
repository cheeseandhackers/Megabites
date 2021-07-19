import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import noRecipe from "../assets/empty_recipes"

class UserRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userrecipes: []
    }
  }
  componentDidMount() {
    this.userRecipes()
  }

  handleSubmit = (e, userRecipeId) => {
    e.preventDefault()
    this.removeRecipe(userRecipeId)
  }

  userRecipes = () => {
    fetch("/user_recipes")
      .then(response => response.json())
      .then(userRecipeArray => this.setState({ userrecipes: userRecipeArray }))
      .catch(errors => console.log("index errors:", errors))
  }

  removeRecipe = (userRecipeId) => {
    fetch(`user_recipes/${userRecipeId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response)
    .then(payload => this.userRecipes())
    .catch(errors => console.log("delete errors:", errors))
  }
  render() {
    let { userrecipes } = this.state
    console.log(userrecipes)
    return (
      <>
        <h1 className="show">Your Saved Recipes</h1>
        <Col sm="6">
          {userrecipes.length > 0 && userrecipes.map(userrecipe => {
            return (
              <Card key={ userrecipe.id }>
                <CardTitle>
                  <NavLink to={`/recipeshow/${userrecipe.recipe_id}`}>
                    <h4>{userrecipe.recipe.title}</h4>
                  </NavLink>
                  <Button onClick={ (e) => this.handleSubmit(e, userrecipe.id)} className="delete-button" color="danger">
                    Remove Recipe From Your Page
                  </Button>
                </CardTitle>
              </Card>
            )
          })}
          </Col>
          {userrecipes.length === 0 && 
            <div className="empty-userrecipes">
              <img className="no-recipe-pic" src={ noRecipe }/>
            </div>
          }
        <div className="recipe-nav-links">
          <NavLink to="/recipeindex">
            <Button className="nav-button" color="success">Recipe Listings </Button>
          </NavLink>
          <NavLink to="/recipe-keto">
            <Button className="nav-button" color="primary">Keto Listings</Button>      
          </NavLink>
          <NavLink to="/recipe-med">
            <Button className="nav-button" color="primary">Mediterranean Listings</Button>      
          </NavLink>
          <NavLink to="/recipe-vegan">
            <Button className="nav-button" color="primary">Vegan Listings</Button>      
          </NavLink>
          <NavLink to="/recipe-gluten-free">
            <Button className="nav-button" color="primary">Gluten-Free Listings</Button>      
          </NavLink>
      </div>
      </>
    )
  }
}

export default UserRecipes
