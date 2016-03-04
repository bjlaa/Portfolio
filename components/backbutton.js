import React from "react";
import {Link} from 'react-router';

class Backbutton extends React.Component {
	render() {
		return (
			<Link className="backlink" to='/'>
				<button className="backbutton">
						<i className="fa fa-arrow-circle-left"></i>
				</button>
			</Link>
		)
	}
}

export default Backbutton;