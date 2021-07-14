import React from "react";
import PropTypes from "prop-types"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RecipeShow from './pages/RecipeShow'
import RecipeIndex from './pages/RecipeIndex'
import RecipeEdit from './pages/RecipeEdit'
import NotFound from './pages/NotFound'
import UserRecipes from './pages/UserRecipes'
import AboutUs from './pages/AboutUs'
import KetoIndex from './pages/KetoIndex'
import GlutenIndex from './pages/GlutenIndex'
import MedIndex from './pages/MedIndex'
import VeganIndex from './pages/VeganIndex'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     recipes: []
    }
  }
  componentDidMount(){
    this.recipeIndex()
    }
  recipeIndex = () =>{
    fetch("/recipes")
    .then(response => response.json())
    .then(recipeArray => this.setState({recipes: recipeArray}))
    .catch(errors => console.log("index errors:", errors))
  }
  deleteRecipe = (id) => {
    fetch(`/recipes/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json)
    .then(payload => this.recipeIndex())
    .catch(errors => console.log("update errors", errors))
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <Router>
          <Header
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
            logged_in={logged_in}
          />
          <Switch>
            <Route path="/recipe-gluten-free" render={ (props) => {
              let glutenFree = this.state.recipes.filter(value => value.diet_type === "Gluten Free")
              return <GlutenIndex glutenFree = { glutenFree }/>
            }}  />
            <Route path="/recipe-keto" render={ (props) => {
              let keto = this.state.recipes.filter(value => value.diet_type === "Keto")
              return <KetoIndex keto = { keto }/>
            }}  />
            <Route path="/recipe-med" render={ (props) => {
              let med = this.state.recipes.filter(value => value.diet_type === "Mediterranean")
              return <MedIndex med = { med }/>
            }}  /> 
            <Route path="/recipe-vegan" render={ (props) => {
              let vegan = this.state.recipes.filter(value => value.diet_type === "Vegan")
              return <VeganIndex vegan = { vegan }/>
            }}  /> 
            <Route exact path="/" component={ Home } />
            <Route path="/recipeindex" render={ (props) => <RecipeIndex recipe={ this.state.recipes } />} />
            <Route path="/recipeedit" component={ RecipeEdit } />
            <Route path="/recipeshow/:id" render={ (props) => { let id = props.match.params.id
            let recipe = this.state.recipes.find(recipe => recipe.id === +id)
            return <RecipeShow recipe={ recipe } /> }} />
            <Route path="/userrecipes" component={ UserRecipes } />
             <Route path="/aboutus" component={ AboutUs } />
            <Route component={ NotFound } />
          </Switch>
          <Footer />
        </Router>
        

        
      </>
    );
  }
}

export default App;
