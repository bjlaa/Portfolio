/*
	Front Page Component
	<FrontPage />
*/

import React from 'react';
import Head from '../components/head.js';
import Footer from '../components/footer.js';

class FrontPage extends React.Component {
	goToSkills(event) {
		event.preventDefault();
		this.props.history.pushState(null, '/skills');
	}

	render() {
		return (
			<div className="frontpage">
				<Head />
				<div className="social">
					<a className="twitter" href="https://twitter.com/bjlaa"><i className="fa fa-twitter-square"></i></a>
					<a className="github" href="https://github.com/bjlaa"><i className="fa fa-github-square"></i></a>
				</div>
				<Menu goToSkills={this.props.goToSkills}/>
				<Footer />
			</div>
		)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
					<a className="aboutLink" href="/about-me">
						<div className="aboutMenu">About Me</div>
					</a>
					<a className="workLink" href="/work">
						<div className="workMenu">Work</div>
					</a>									
					<a className="skillLink" href="/skills" onClick={this.props.goToSkills}>
						<div className="skillsMenu">Skills</div> 
					</a>
			</div>
		)
	}
}

export default FrontPage;