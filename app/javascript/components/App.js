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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
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
            <Route exact path="/" component={ Home } />
            <Route path="/recipeindex" component={ RecipeIndex } />
            <Route path="/recipeedit" component={ RecipeEdit } />
            <Route path="/recipeshow" component={ RecipeShow } />
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
