/*
	Head Component: the title screen of this app
	<Head />
*/

import React from 'react';


class FrontPage extends React.Component {
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
			<div className="menu">
				<div>Skills</div>
				<div>Work</div>
				<div>About Me</div>
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