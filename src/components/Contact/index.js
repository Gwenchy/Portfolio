import React from 'react';
import "./style.css";
import Modals from "../Modal";

const Divs = (props) => {
	return(
		<div className="container-fluid contact" id="contact">
			<h1>Stay In Touch</h1>
			<Modals
			buttonLabel="Send Me An Email"
			/>
		</div>
	);
}

export default Divs;