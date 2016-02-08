import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

var data = {
  	work: [
		{	
			id: "11",
			title: "Build A Portfolio Site",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",

		},
		{	
			id:"12",
			title: "Online Resume",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
		
		},
		{
			id:"13",
			title: "Classic Arcade Game Clone",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
		
		},
		{
			id: "14",
			title: "Website Optimisation",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
	
		},
		{
			id: "15",
			title: "Neighborhood Map Project",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
		
		},
		{	
			id:"16",
			title:"Feed Reader Testing",
			imageURL: "http://images.huffingtonpost.com/2015-07-14-1436902565-6235018-SpongeBob_5.png",
			
		}
	],
	skills: [
		{
			id: "21",
			title: "HTML/CSS",
			imageAlt:"The HTML logo.",
			imageURL: "css/html.svg",
			keywords:["HTML5/CSS3", "Responsive Design", "Animations", "Sass"]
		},
		{
			id: "22",
			title: "Javascript",
			imageAlt:"The JS logo.",
			imageURL: "css/javascript.svg",
			keywords:["Javascript ES5 ES6", "jQuery", "Ajax"]
		},	
		{
			id: "23",
			title: "Frameworks",
			imageAlt: "The React logo.",
			imageURL: "css/react.svg",
			keywords:["React", "Bootstrap", "Backbone/Knockout", "Jasmine"]
		},	
	]
};

class App extends React.Component {
	render() {
		return (
			<div>
				<Head />
				<Skills data={data} />
				<Work data={data} />
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


/*
	Skills Component
	<Skills />
*/


class Skills extends React.Component {
	render() {
		return (
			<div className="skills">
				<SkillItem data={this.props.data} />
			</div>
		)
	}
}
class SkillItem extends React.Component {
	render() {
		var skill = this.props.data.skills.map(function(e) {
			return (
				<div key={e.id}>
					<h4>{e.title}</h4>
					<img src={e.imageURL} alt={e.imageAlt}/>
					<ul>
						<li></li>
					</ul>
				</div>
			)
		});
		return (
			<div className="skill-item">
				{skill}
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
		var work = this.props.data.work.map(function(e) {
			return (
				<div className="work-item" key={e.id}>
					<img src={e.imageURL} alt=""/>
					<h4>{e.title}</h4>
				</div>
			)
		});
		return (
			<div className="work">
				{work}
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
ReactDOM.render(<App data={data} />, main);



