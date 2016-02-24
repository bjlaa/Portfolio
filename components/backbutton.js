import React from "react";

class Backbutton extends React.Component {
	render() {
		return (
			<button className="backbutton">
				<a href="/">
					<i className="fa fa-arrow-circle-left"></i>
				</a>
			</button>
		)
	}
}

export default Backbutton;