import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const About = (props) => {
	return(
		<div>
      <button className="buttonStyle" color="primary" size="lg" href={props.link}>{props.children}</button>
		</div>
	);
}

export default About;