/*
	Menu Component
*/
import React from 'react';

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<a>
					<div className="workLink">Work</div>
				</a>
				<a >
					<div className="skillsLink">Skills</div> 
				</a>
				<a >
					<div className="cvresumeLink">C.V./Resume</div> 
				</a>	
				<a >
					<div className="aboutLink">About Me</div>
				</a>
				<a >
					<div className="contactLink">Contact</div> 
				</a>		
			</div>
		)
	}
}

export default Menu;