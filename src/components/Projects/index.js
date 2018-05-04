import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import "./style.css";

const Projects = (props) => {
  return (
    <div className="projects">
    <h1>My Projects</h1>
    <p>The Projects I have at this moments are applications I did in my code camp. I am working in new applications at this moment to gain experience and be more accustom to coding on a daily basis.</p>
    <CardDeck id="Projects">
      <Card>
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/dg0nFnuSGisrGQvnTUa6OJ26bLKQWpJWpslEOnJ-j1SjtniQuD3wmUxZ2zW7hRFpRGbBQySx_-mBYeFx97E8egtL21MJ7z3sy3Pyj2jOWq3tXrOghDTJTbNEuQFI-hldVc9cYVVVx38ANwHoiwswkw-ajRyrg44Mf8ujYXyjB230-Ykm_oTDgdk-RvvIRhTUzPJSivSVHM-oEWwWAnE_Ex9NxLXVN88CDGD7CeyG9ptXqL4XByrjgaVrA12UQY9kMu1dnkkv1uBM3Vta4RLg890EoEYHW5uDHpGVdSGvuVAAOk9-tRazIOicWf9poxPGwxWrF5A258dGmWGdecrZq33TDEL1EXKt3DjoQecF8zA0eH5h9A7uXkwFFzBQEtcikeRo_PbCRJPyFN9VIeKIvkhjrR3l2Ti4ov-yS57SS2KGOu1df8H4x7e-Saz-PUz2yCH4-Y4W5bcPXOrzg3gsA7wc8J7ilBEAHldQqkyZJAiE4z9XMks6dsKTAz-UGTQ7IH9QeXEC9YAcEihn_g_tDn5UYAKjLYFEthkf68W9GNsCaBSKsuAKd3iF3ZbjkPxegnQz46aVSZBsTeGGYIKjDDSL5QucrajzIY9dkNnv=w2728-h1524-no" alt="Trivia" />
        <CardBody>
          <CardTitle>HTML/Javascript</CardTitle>
          <CardSubtitle>Trivia Game</CardSubtitle>
          <CardText>This was a small school project I did that shows my love for coding and anime.</CardText>
          <Button>Click here to see app</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/09tek8_ok7TSOAdJoL04cWLoOYaBXjtAFN908Ack1l4V3O8tvQOo4aYG7onURZ-NsllHemw8te1US2ewE3yyDMsyEkurSARZ6v8GB_IY7OdJlyC2KkZOmCNXMh5IqRoNuHtR7oeeV6XpcvFgASzrz2wHG2L8XlpbhlMUeKr4R1HaIS9X1C1n4d1qhADYkWAt0ZhFIkhkq3wWtLO0npaXil09bSU37wknjhyEtu3JUDzoNYRwObksXTK9Ih-ZitFCDOWSPKY8JEHIlPIhZSajIu4NF-n84cBYv8OC8k39FwhcbKfTKPLGcKNMlYu6VS9oD8h8Z_mpgfs06myzh2poC_AUnZUaYPAMgCvJnb6UN3YLEKXSxwIbClVGcVF5PsIa9BI_Eh4T0jxoiYrJVIuEZKpOMgOPn0mnYEGiDUPLGS8rb7VG7dXx5b1bELmt91BDmt9HBK1mZU9TJvw_dXIZGC1vzqH-q5cXTJytaAa5YScKsC34pqNBXWtu4wm-WS8f7LmSVxVOoC8Kjmiu5bf0iqU_dOcn3UlFVtbgoH9mIAJkBWd0GzOLDHt-j0-ivaZd2p7rgjgL-dgGNlAs1U2GP1PIgKwZwe8krnDUXS8B=w346-h198-no" alt="NYScraper" />
        <CardBody>
          <CardTitle>MongoDB</CardTitle>
          <CardSubtitle>Nyscraper</CardSubtitle>
          <CardText>My first try with React.</CardText>
          <Button src="https://nyscraperapp.herokuapp.com/">Visit App</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/kFSIdZ55l5debt_0bBhaPPew6jrAW6VYKYC4AIi7Nb-B5dNRGEdRBbQc_KvFQmJcUOTpkopPY3KVKdIx-YkzCN8OuOQHge30R6NzVyrzBaIicAbcX8ws2fJKYI3qoqq8FTZv303GrBGkyrafaTfqXU3QvcXluzuFG7nLiJCROYykd4Ai3NZw8c7MCVIns3w-HxQpj5Y0n1F7mr5E8BqGYPcRZabrsJ77Hw8fOROhPuTDKkcdZhlcfLpttkffrPM46BIhnHaGNfgh3YML9NgmxyRn_7Ylo8aEqSEqaqguHhd41y5NXKgvOpbj9Ptw4AIOw5A4K0AkJfLPN3roQKuH0zgFR0bCRAAzyocILwXrQoYcj2HjZhRsfAgOTahPPrc2mCmY3ebXMwpyZyQJc-Xp8Cpc003U9fMNqkZ51TlT-Ii7PYpJ5WCVfwIBMtH0AjGqqX1u-xiDctwtCI2FVktzu1HiyH19lEdCd0FhnU5yZL1RMcKR3_yzXa_20GrGLFVh_uNTXMDMpKzP2RhzzwtNdYQGsm4UTUo-bTWvz5w39bCh6dGBzjZGnWKYzKWuWSG8DbWOFw1iR8hfbgaO3-5TsG03VTTEhNW3y2XmqQsx=w2948-h1686-no" alt="Final Project" />
        <CardBody>
          <CardTitle>React</CardTitle>
          <CardSubtitle>Barrier Breaker</CardSubtitle>
          <CardText>This was my final project for the UCF code camp.</CardText>
          <Button src="https://fast-mesa-44518.herokuapp.com/">Check it out</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default Projects;