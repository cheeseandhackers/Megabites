import React from 'react'
import { 
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardImgOverlay, } from 'reactstrap'
// import { NavLink } from 'react-router-dom'

const AboutUs = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          
          width="0%"
          height="700vw"
          src="/assets/Hex.png"
          alt=""
        />
        <CardBody>
          <CardTitle tag="h5">Hector Flores</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Full Stack Developer
          </CardSubtitle>
          <CardText>
            Hello, I am Hex.
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>

      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/Erik.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Erik Engstrom</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Full Stack Developer
          </CardSubtitle>
          <CardText>
            Hi, my name is Erik.
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>

      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/Jonathan.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Jonathan Sanchez</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
          Full Stack Developer
          </CardSubtitle>
          <CardText>
            Hi, my name is Jonathan!
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/Chris.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Chris Sullivan</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Full Stack Developer
          </CardSubtitle>
          <CardText>
           Hi, my name is Chris!
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

    </div>
  );
};

export default AboutUs;




// class AboutUs extends Component {
//   render () {
//       return(
//       <>
//         <h1>About Us</h1>
//       </>
    
         
//       )    
//   }
// }

