import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import "./style.css";

const Projects = (props) => {
  return (
    <div className="projects" id="Projects">
    <h1>My Projects</h1>
    <p>The Projects I have at this moments are applications I did in my code camp. I am working in new applications at this moment to gain experience and be more accustom to coding on a daily basis.</p>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="http://i67.tinypic.com/246tkbm.png" alt="Trivia" />
        <CardBody>
          <CardTitle>HTML/Javascript</CardTitle>
          <CardSubtitle>Trivia Game</CardSubtitle>
          <CardText>This was a small school project I did that shows my love for coding and anime.</CardText>
          <Button href="https://gwenchy.github.io/TriviaGame/">Click here to see app</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="http://i66.tinypic.com/pye76.png" alt="NYScraper" />
        <CardBody>
          <CardTitle>MongoDB</CardTitle>
          <CardSubtitle>Nyscraper</CardSubtitle>
          <CardText>My first try with React.</CardText>
          <Button href="https://nyscraperapp.herokuapp.com/">Visit App</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="http://i66.tinypic.com/33peh4w.png" alt="Final Project" />
        <CardBody>
          <CardTitle>React</CardTitle>
          <CardSubtitle>Barrier Breaker</CardSubtitle>
          <CardText>This was my final project for the UCF code camp.</CardText>
          <Button href="https://fast-mesa-44518.herokuapp.com/">Check it out</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default Projects;