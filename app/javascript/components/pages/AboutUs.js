import React from "react";
import Chris from "../assets/Chris.jpg"
import Erik from "../assets/Erik.jpg"
import Hex from "../assets/Hex.png"
import Jonathan from "../assets/Jonathan.jpg"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardImgOverlay,
} from "reactstrap";

const AboutUs = (props) => {
  return (
    <div className="div-container">
      <h2 className="show">About the Cheese and Hackers Team</h2>
      <Card className="about-cards">
        <CardImg width="0%" height="700vw" src={Hex} alt="" />
        <CardBody>
          <CardTitle tag="h5">Hector Flores</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Full Stack Developer
          </CardSubtitle>
          <CardText>
            Hi my name is Hector Flores and I’m a full stack web developer.
            Being a full stack developer requires a lot of time, dedication and
            willingness to specialize in both ends of the framework, so the
            process can be tedious - however my military background and life
            experiences has assisted me with the transition. My reason I’m so
            passionate about being a full stack web developer is I want to offer
            my knowledge I’ve gained from Learn academy into protecting computer
            systems and networks from information disclosure, theft or damage to
            hardware, software or electronic data.
          </CardText>
        </CardBody>
      </Card>

      <Card className="about-cards">
        <CardImg top width="100%" src={Erik} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Erik Engstrom</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Full Stack Developer
          </CardSubtitle>
          <CardText>
            Hi, my name is Erik Engstrom and I'm a full-stack software developer
            based in San Diego, CA. My passions in life revolve around lifelong
            learning and adventures that quench my thirst for continuous
            improvement. I have a technical/problem solving background as an
            Interior Communications Electrician in the US Navy and a B.S in
            Mechanical Engineering from San Diego State University. I'm a golf
            fanatic, love sports and enjoy the outdoors with friends and family.
          </CardText>
        </CardBody>
      </Card>

      <Card className="about-cards">
        <CardImg
          top
          width="100%"
          src={Jonathan}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Jonathan Sanchez</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Full Stack Developer
          </CardSubtitle>
          <CardText>
            I am a full stack developer in training currently studying a number
            of programming languages and libraries seeking employment in the
            software development industry. I have a personal passion for
            developing projects in team based environments and working with
            other developers from any and all backgrounds. Outside of software
            development, I thoroughly enjoy travel, movement, and trying any and
            all foods I can get my hands on.
          </CardText>
        </CardBody>
      </Card>

      <Card className="about-cards">
        <CardImg
          top
          width="100%"
          src={Chris}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Chris Sullivan</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Full Stack Developer
          </CardSubtitle>
          <CardText>
            I am a software developer wanting to make products to change peoples
            lives for the better! I strive to make the best product that I can,
            and learn new technologies as they become available so I am able to
            keep making wonderful products! I have a background in unit
            leadership from being a sniper in the Marine Corps, who lives in
            Round Rock Texas, and I love outdoor activities to include camping,
            hiking and fishing.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutUs;
