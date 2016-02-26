/*
	Front Page Component
	<FrontPage />
*/

import React from 'react';
import Head from '../components/head.js';
import Footer from '../components/footer.js';
import {Link} from 'react-router';

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
					<Link to="/about-me">
						<a className="aboutLink" href="#">
							<div className="aboutMenu">About Me</div>
						</a>
					</Link>	
					<Link to="/work">
						<a className="workLink" href="#">
							<div className="workMenu">Work</div>
						</a>
					</Link>
					<Link to="/skills">
						<a className="skillLink" href="#" onClick={this.props.goToSkills}>
							<div className="skillsMenu">Skills</div> 
						</a>
					</Link>			

			</div>
		)
	}
}

export default FrontPage;

