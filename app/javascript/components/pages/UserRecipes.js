import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
    return (

      <>
        <h1>Your Saved Recipes</h1>
        <Col sm="6">
          {userrecipes.map(userrecipe => {
            return (
              <Card body>
                <CardTitle>
                  <NavLink to={`/recipeshow/${userrecipe.recipe_id}`}>
                    <h4>{userrecipe.recipe.title} </h4>
                  </NavLink>
                  <Button onClick={ (e) => this.handleSubmit(e, userrecipe.id)} id = "delete-button" color = "danger">Remove Recipe From Your Page</Button>
                </CardTitle>
                <CardText></CardText>
              </Card>
            )
          })}
        </Col>
        <NavLink to="/recipeindex">
          <Button id="index-button" color="success">Recipe Listings </Button>
        </NavLink>



      </>
    )
  }
}

export default UserRecipes
