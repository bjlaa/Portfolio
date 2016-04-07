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
	constructor(props) {
		super(props);
		this.state = {
			visiblePage : ""
		}
	}
	componentDidMount() {
		this.loadingLoader();
	}
	loadingLoader() {
		this.setState({visiblePage:"load"});
		setTimeout(function() {
			this.loadingFrontPage();
		}.bind(this), 4000)
	}
	loadingFrontPage() {
		this.setState({visiblePage:"frontpage"});
	}
	render() {
		var visiblePage;
		var loader = <Loader />;
		var frontPage = 
			<div className="frontpage">
				<Head />
				<div className="social">
					<a className="twitter" href="https://twitter.com/bjlaa"><i className="fa fa-twitter-square"></i></a>
					<a className="github" href="https://github.com/bjlaa"><i className="fa fa-github-square"></i></a>
				</div>
				<Menu />
				<Footer />
			</div>;


		/*
			Conditional rendering of the main component
			after load time
		*/
		switch(this.state.visiblePage) {
			case "load":
				visiblePage = loader;
				break;
			case "frontpage":
				visiblePage = frontPage;
				break;
		}

		return (
			<div>
				{visiblePage}
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

