import React from "react";
import {Link} from 'react-router';

class Backbutton extends React.Component {
	render() {
		return (
			<button className="backbutton">
				<Link to='/'>
					<a href="#">
						<i className="fa fa-arrow-circle-left"></i>
					</a>
				</Link>
			</button>
		)
	}
}

export default Backbutton;