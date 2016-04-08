/*
	Loader Component
	<Loader />
*/

import React from 'react';


class Loader extends React.Component {
	render() {
		return(
			<div className="loader">
				<div className="circle">
					Loading...
					<br/>
					<br/>
					<i className="hourglass fa fa-hourglass"></i>
				</div>
			</div>

		)
	}
}

export default Loader;