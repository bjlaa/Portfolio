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
					<h1>B. Arias</h1>
					<h2>Front-End Developer</h2>
				</div>
				<div className="social">
					<a href="https://twitter.com/bjlaa"><i className="fa fa-twitter-square"></i></a>
					<a href="https://github.com/bjlaa"><i className="fa fa-github-square"></i></a>
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
					<a href="/about-me">
						<div className="aboutMenu">About Me</div>
					</a>
					<a href="/work">
						<div className="workMenu">Work</div>
					</a>									
					<a href="/skills" onClick={this.props.goToSkills}>
						<div className="skillsMenu">Skills</div> 
					</a>
				</nav>
			</div>
		)
	}
}

export default FrontPage;