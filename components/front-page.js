/*
	Head Component: the title screen of this app
	<Head />
*/

import React from 'react';
import ClassNames from 'classnames';

class FrontPage extends React.Component {
	goToSkills(event) {
		event.preventDefault();
		this.props.history.pushState(null, '/skills');
	}

	render() {
		return (
			<div className="frontpage">
				<div className="head">
					<h1>Benjamin Arias</h1>
					<h2>Front-End Developer</h2>
				</div>
				<Menu goToSkills={this.props.goToSkills}/>
			</div>
		)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<nav>
				<a href="/skills" onClick={this.props.goToSkills}>Skills</a>
				<a href="/work">Work</a>
				<a href="/about-me">About Me</a>
				</nav>
			</div>
		)
	}
}

export default FrontPage;