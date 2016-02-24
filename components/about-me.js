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
					<img src="" alt="An image of my face"/>
					<p>Hi, my name is Benjamin and I am a Front-End Developer based in Berlin, Germany. 
						I started developing my first websites by taking the Front-End Web Developer Nanodegree at Udacity in March 2015.  
						My Diploma obtained I chose to perfect my skills by taking the Senior Web Developer Nanodegree (again at Udacity). </p>
				</div>
				<Footer />
			</div>
		)
	}
}

export default AboutMe;