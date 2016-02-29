import React from "react";
import {Link} from 'react-router';

class Backbutton extends React.Component {
	render() {
		return (
			<button className="backbutton">
				<Link to='/'>
					<div>
						<i className="fa fa-arrow-circle-left"></i>
					</div>
				</Link>
			</button>
		)
	}
}

export default Backbutton;