/*
	AboutMe Component: displaying contact infos, resume, bio ect...
	<AboutMe />
*/

import React from "react";
import Footer from '../components/footer.js';
import Backbutton from '../components/backbutton.js';


class AboutMe extends React.Component {
	render() {
		return (
			<div className="about-me">
				<Backbutton />
				<div className="presentation">
					<img className="img-about" src="../css/ninja.svg" alt="An image of my face"/>
					<p>Hi, my name is Benjamin. I am a Front-End Ninja and Developer based in Berlin, Germany. 
						I started developing my first websites by taking the Front-End Web Developer Nanodegree at Udacity.  
						My Diploma obtained I chose to perfect my skills by taking the Senior Web Developer Nanodegree.</p> 
					<p>Thank you for visiting my portfolio. On the Menu page click on work to see a showcase of my work. 
					Click on Skills in order to get to know better what I can do.</p>
				</div>
				<Footer />
			</div>
		)
	}
}

export default AboutMe;