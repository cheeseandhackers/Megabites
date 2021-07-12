import React, { Component } from "react";
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <>
        <h1>Welcome to MegaBite</h1>
        <NavLink id = "home-button" to ="/recipeindex">
      <Button  color="success">Recipe List</Button>      
      </NavLink>
      </>
    );
  }
}
export default Home
