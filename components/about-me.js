/*
	AboutMe Component: displaying contact infos, resume, bio ect...
	<AboutMe />
*/

import React from "react";
import Contact from '../components/contact.js';


class AboutMe extends React.Component {
	render() {
		return (
			<div id='about' className="about-me">
				<div className="presentation">
					<img className="img-about" src="../css/ninja.svg" alt="An image of my face"/>
					<p>Hi, my name is Benjamin. I am a Front-End Ninja and Developer based in Berlin, Germany. 
						I started developing my first websites by taking the Front-End Web Developer Nanodegree at Udacity.  
						My Diploma obtained I chose to perfect my skills by taking the Senior Web Developer Nanodegree, which I am currently working on.</p> 
					<p>Thank you for visiting my portfolio. This website is completely built in React and Javascript ES6. On the Menu page click on work to see a showcase of my work. 
					Click on Skills in order to get to know better what I can do.</p>
					<p>If you wish to contact me, please scroll down and fill out the form right below.</p>
				</div>
			</div>
		)
	}
}



export default AboutMe;