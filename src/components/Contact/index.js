import React from 'react';
import "./style.css";
import Button from "../Button";

const Divs = (props) => {
	return(
		<div className="container-fluid contact" id="Contact">
			<div className="row">
				<div className="col-lg colMargin">
					<h1>Stay In Touch</h1>
					<div className="row">
						<a className="buttonStyle" href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Send Mail</a>
					</div>
				</div>
				<div className="col-lg-8 colMargin">
				<h1>You can also contact me here:</h1>
					<div className="row">
						<div className="col-sm text-right">
							<Button link="https://github.com/Gwenchy">
								Github Link
							</Button>
						</div>
						<div className="col-sm">
							<Button link="https://www.linkedin.com/in/edgardo-mendez-soto-b8966a145/">
								Linkedin
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Divs;