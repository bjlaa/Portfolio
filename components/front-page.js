/*
	Head Component: the title screen of this app
	<Head />
*/

import React from 'react';


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
				<Hamburger onClick={this.toggleMenu}/>
				<Menu goToSkills={this.props.goToSkills}/>
				<Navigation />
			</div>
		)
	}
}

class Hamburger extends React.Component {
	render() {
		return (
			<div className="hamburger">
				<span></span>
				<span></span>
				<span></span>
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
class Navigation extends React.Component {
	render() {
		return (
			<div className="navig"></div>
		)
	}
}

export default FrontPage;