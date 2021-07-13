import React, { Component } from "react";
import { Button, Jumbotron, Card, CardTitle, Col, CardText, Media } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
      <div class="jumbotron" >
        <Jumbotron>
          <h1>Welcome to MegaBite</h1>
          <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p>
          <NavLink id = "home-button" to ="/recipeindex">
            <Button color="primary">Recipe List</Button>
          </NavLink>
          </p>
        </Jumbotron>
        </div>
        <div className="home-paragraph"> <p> Modern day science emphasizes the great importance of healthy and fulfilling interactions with food. Our quality of life and mental health is dependent upon on the daily food choices we make. Here at MegaBites we wish to empower you to make the choices that are right for you. Feel free to explore the Top 4 Diets Backed by Science to see what is right for you.
        </p>
        <img id="balance_diet" src="../assets/balance_diet.jpg" className="balanced_diet_picture"></img>
        </div>
        <Col sm="6">
          <Card body>
            <CardTitle>Low Carb Keto Diet</CardTitle>
              <CardText>The low-carb, whole-food diet is perfect for people who need to lose weight, optimize health, and lower their risk of disease. It’s flexible, allowing you to fine-tune your carb intake depending on your goals. This diet is high in vegetables, meat, fish, eggs, fruits, nuts, and fats but low in starches, sugars, and processed foods.
            </CardText>
              <NavLink to ="/recipeindex">
                <Button id = "index-button" color="primary">Explore Keto Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Mediteranean Diet</CardTitle>
              <CardText>The Mediterranean diet is an excellent diet that has been thoroughly studied. It’s particularly effective for heart disease prevention. It emphasizes foods that were commonly eaten around the Mediterranean region during the 20th century and earlier. As such, it includes plenty of vegetables, fruits, fish, poultry, whole grains, legumes, dairy products, and extra virgin olive oil.</CardText>
              <NavLink to ="/recipeindex">
                <Button id = "index-button" color="primary">Explore Mediteranean  Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Vegan Diet</CardTitle>
              <CardText>The paleo diet is a very popular diet that is effective for weight loss and general health improvement. It’s currently the world’s most popular diet. It centers on unprocessed foods believed to resemble those available to some of humanity’s paleolithic ancestors.</CardText>
              <NavLink to ="/recipeindex">
                <Button id = "index-button" color="primary">Explore Vegan Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Gluten-Free Diet</CardTitle>
              <CardText>The gluten-free diet is essential for people who are intolerant to gluten, a protein that is found in wheat, rye, and barley. For optimal health, you should focus on whole foods that are naturally gluten-free. Gluten-free junk food is still junk food.</CardText>
              <NavLink to ="/recipeindex">
                <Button id = "index-button" color="primary">Explore Gluten-Free Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
      </>
    );
  }
}
export default Home
