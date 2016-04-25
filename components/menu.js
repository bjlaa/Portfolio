/*
	Menu Component
*/
import React from 'react';

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<a className='menu-items' onClick={this.props.scrollToDiv.bind(this, '#work')}>
					<div className="workLink">Work</div>
				</a>
				<a className='menu-items' onClick={this.props.scrollToDiv.bind(this, '#skills')}>
					<div className="skillsLink">Skills</div> 
				</a>
				<a className='menu-items' onClick={this.props.scrollToDiv.bind(this, '#cvresume')}>
					<div className="cvresumeLink">C.V./Resume</div> 
				</a>	
				<a className='menu-items' onClick={this.props.scrollToDiv.bind(this, '#about')}>
					<div className="aboutLink">About Me</div>
				</a>
				<a className='menu-items' onClick={this.props.scrollToDiv.bind(this, '#contact')}>
					<div className="contactLink">Contact</div> 
				</a>		
			</div>
		)
	}
}

export default Menu;