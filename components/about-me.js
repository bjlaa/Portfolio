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
					<p>If you wish to contact me, please scroll down and fill out the form right below.</p>
				</div>
				<Contact />
				<Footer />
			</div>
		)
	}
}

class Contact extends React.Component {
	render() {
		return (
			<form className="contact-me" action="">
				<p className="contact-title">Contact Me</p>
				<label htmlFor="name">
					<p>What's your name? </p>
					<input id="name" type="text" placeholder="Type in your name" autoComplete="on"/>
				</label>
				<br/>
				<label htmlFor="mail"> 
					<p>And your email? </p> 
					<input id="mail" type="text" placeholder="Type in your email address" autoComplete="on"/>
				</label>
				<br/>
				<label htmlFor="message"> 
					<p>Please state the object of your inquiry </p> 
					<textarea id="message" type="text" placeholder="Type in your message"/>
				</label>
				<input className="form-send" type="submit" value="SEND"/>
			</form>
		)
	}
}

export default AboutMe;