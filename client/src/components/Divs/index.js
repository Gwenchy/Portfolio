import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Divs = (props) => {
	return(
		<div className="row position">
			{props.children}
		</div>
	);
}

export default Divs;