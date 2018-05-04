import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const About = (props) => {
	return(
		<div className="container-fluid about" id="About">
			<div className="row">
				<div className="col-md">
					<h1>Full Stack Web Developer</h1>
				</div>
				<div className="col-md">
					<p>
						My name is Edgardo Mendez and I am a Web Developer based in Florida who specialize in HTML, 
						CSS, Javascript, Node.js and React.js to mention a few. I am also a father of two very handsome boys
						and a new born girl which are the reason why I always do my very best to impress so I can always
						provide for them. I have been tinkering with HTML and CSS for around 3 years but decided to take it a
						step further and learn more complicated languages and programs to upgrade my professionalism. So I went
						to a coding bootcamp in UCF to learn more about web developing. 
					</p>
					<p>
						My goal is to integrate what I've learned into my previous knowledge so I can make more complex web applications. 
						My next step will be to continue my studies towards computer engineering and make my little ones be proud of their daddy
						(since right now they dont even know what I do ;-D).
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;