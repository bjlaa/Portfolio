/*
	Head component: name and logo reusable
*/

import React from 'react';

class Head extends React.Component {
	render() {
		return (
			<div className="head">
					<div className='title-name'>Benjamin Arias</div>
					<div className='title-sub'>Front-End Developer</div>
			</div>
		)
	}
}

export default Head;