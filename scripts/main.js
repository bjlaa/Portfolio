import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<Head />
				<Skills />
				<Work />
				<AboutMe />
			</div>
		)
	}
}

/*
	Head Component: the title screen of this app
	<Head />
*/

class Head extends React.Component {
	render() {
		return (
			<div className="head">
				<h1>Benjamin Arias</h1>
				<h2>Front-End Developer</h2>
				<Hamburger />
				<Menu />
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
			<div className="menu"></div>
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


/*
	Skills Component
	<Skills />
*/


class Skills extends React.Component {
	render() {
		return (
			<div className="skills">
				<SkillItem />
			</div>
		)
	}
}
class SkillItem extends React.Component {
	render() {
		return (
			<div className="skill-item">
				<img src="" alt=""/>
				<ul>
					<li></li>
				</ul>
			</div>
		)
	}
}

/*
	Work Component
	<Work />
*/

class Work extends React.Component {
	render() {
		return (
			<div className="work">
				<Project />
			</div>
		)
	}
}
class Project extends React.Component {
	render() {
		return (
			<div className="project">
				<p className="project-title"></p>
			</div>
		)
	}
}

/*
	AboutMe Component: displaying contact infos, resume, bio ect...
	<AboutMe />
*/

class AboutMe extends React.Component {
	render() {
		return (
			<div className="about-me"></div>
		)
	}
}

var main = $('#main').get(0);
ReactDOM.render(<App/>, main);



