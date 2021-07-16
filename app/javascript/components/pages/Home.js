import React, { Component } from "react";
import { Button, Jumbotron, Card, CardTitle, Col, CardText, CardImg, CardBody } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import balanceDiet  from "../assets/balance_diet.jpeg"
import glutenFree from "..//assets/gluten-free.png"
import keto from "..//assets/keto.jpeg"
import mediterranian from "..//assets/mediteranean.jpeg"
import vegan from "../assets/vegan.jpeg"

class Home extends Component {
  render() {
    return (
      <>
      <div className="jumbotron" >
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
        <Col sm="5">
        <Card id="card">
          <CardImg top width="100%" src={ balanceDiet } />
            <CardBody>
              <CardTitle tag="h5">Diets Backed By Science</CardTitle>
                <CardText> Modern day science emphasizes the great importance of healthy and fulfilling interactions with food. Our quality of life and mental health is dependent upon on the daily food choices we make. Here at MegaBites we wish to empower you to make the choices that are right for you. Feel free to explore the Top 4 Diets Backed by Science to see what is right for you.
                </CardText>
            </CardBody>
        </Card>
        </Col>
      <div id="home">
        <Col sm="5">
          <Card id ="card">
            <CardBody>
              <CardTitle tag="h5">Low Carb Keto Diet</CardTitle>
            </CardBody>
              <img className="card-image" width="100%" src={ keto }/>
            <CardBody>
              <CardText>The low-carb, whole-food diet is perfect for people who need to lose weight, optimize health, and lower their risk of disease. It’s flexible, allowing you to fine-tune your carb intake depending on your goals. This diet is high in vegetables, meat, fish, eggs, fruits, nuts, and fats but low in starches, sugars, and processed foods.</CardText>
            </CardBody>
            <NavLink to ="/recipe-keto">
                <Button id = "index-button" color="primary">Explore Keto Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
        <Col sm="5">
          <Card id ="card">
            <CardBody>
              <CardTitle tag="h5">Mediterranean Diet</CardTitle>
            </CardBody>
              <img width="100%" className="card-image" src={ mediterranian }/>
            <CardBody>
              <CardText>The Mediterranean diet is an excellent diet that has been thoroughly studied. It’s particularly effective for heart disease prevention. It emphasizes foods that were commonly eaten around the Mediterranean region during the 20th century and earlier. As such, it includes plenty of vegetables, fruits, fish, poultry, whole grains, legumes, dairy products, and extra virgin olive oil.</CardText>
            </CardBody>
            <NavLink to ="/recipe-med">
                <Button id = "index-button" color="primary">Explore Mediterranean Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
        <Col sm="5">
          <Card id ="card">
            <CardBody>
              <CardTitle tag="h5">Vegan Diet</CardTitle>
            </CardBody>
              <img width="100%" className="card-image" src={ vegan }/>
            <CardBody>
              <CardText>The vegan diet has become increasingly popular in the past decade. It’s linked to a number of health benefits, including weight loss, improved heart health, and better blood sugar control. The diet is based exclusively on plant foods and eliminates all animal products.</CardText>
            </CardBody>
            <NavLink to ="/recipe-vegan">
                <Button id = "index-button" color="primary">Explore Vegan Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
        <Col sm="5">
          <Card id ="card">
            <CardBody>
              <CardTitle tag="h5">Gluten-Free Diet</CardTitle>
            </CardBody>
              <img width="100%" className="card-image" src={ glutenFree }/>
            <CardBody>
              <CardText>The gluten-free diet is essential for people who are intolerant to gluten, a protein that is found in wheat, rye, and barley. For optimal health, you should focus on whole foods that are naturally gluten-free. Gluten-free junk food is still junk food.</CardText>
            </CardBody>
            <NavLink to ="/recipe-gluten-free">
                <Button id = "index-button" color="primary">Explore Gluten-Free Recipes</Button>      
              </NavLink>
          </Card>
        </Col>
      </div>   
      </>
    );
  }
}
export default Home
