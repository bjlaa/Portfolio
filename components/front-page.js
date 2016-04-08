/*
	Front Page Component
	<FrontPage />
*/

import React from 'react';
import Head from '../components/head.js';
import Footer from '../components/footer.js';
import {Link} from 'react-router';
import Loader from '../components/loader.js';

class FrontPage extends React.Component {

	render() {
		var loader = <Loader />;

		return (
			<div>
				<Loader />
				<div className="frontpage">
					<Head />
					<div className="social">
						<a className="twitter" href="https://twitter.com/bjlaa"><i className="fa fa-twitter-square"></i></a>
						<a className="github" href="https://github.com/bjlaa"><i className="fa fa-github-square"></i></a>
					</div>
					<Menu />
					<Footer />
				</div>;
			</div>
		)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
					<div className="aboutLink">
						<Link to="/about-me">
							<div className="aboutMenu">ABOUT ME</div>
						</Link>
					</div>
					<div className="workLink">
						<Link to="/work">
							<div className="workMenu">WORK</div>
						</Link>
					</div>
					<div className="skillLink">
						<Link to="/skills">
							<div className="skillsMenu">SKILLS</div> 
						</Link>			
					</div>
			</div>
		)
	}
}

export default FrontPage;

