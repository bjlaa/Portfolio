/*
	AboutMe Component: displaying contact infos, resume, bio ect...
	<AboutMe />
*/

import React from "react";
import Footer from '../components/footer.js';
import Backbutton from '../components/backbutton.js';


class AboutMe extends React.Component {
	constructor(props) {
		super(props);

		this.state= {
			contactTitle : "Contact Me",
			disabled: false
		};
	}

	validateSending(event) {

		this.setState({contactTitle : "Thank you. I will get back to you ASAP."});
		this.setState({disabled: "true"});
		
	}

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
				<Contact validateSending={this.validateSending.bind(this)} contactTitle={this.state.contactTitle} disabled={this.state.disabled}/>
				<Footer />
			</div>
		)
	}
}

class Contact extends React.Component{
	render() {
		return (
			<form className="contact-me" action="//formspree.io/benjamin.j.arias@gmail.com"
      method="POST" onSubmit={this.props.validateSending}>
				<p className="contact-title">{this.props.contactTitle}</p>
				<label name="name" htmlFor="name">
					<p>What's your name? </p>
					<input name="name" id="name" type="text" placeholder="Type in your name" autoComplete="on" disabled={this.props.disabled} required />
				</label>
				<br/>
				<label name="email" htmlFor="mail"> 
					<p>And your email? </p> 
					<input name="_replyto" id="mail" type="text" placeholder="Type in your email address" autoComplete="on" disabled={this.props.disabled}  required/>
				</label>
				<br/>
				<label name="text" htmlFor="message"> 
					<p>Please state the object of your inquiry </p> 
					<textarea name="text" id="message" type="text" placeholder="Type in your message" disabled={this.props.disabled} required/>
				</label>
				<input className="form-send" type="submit" value="Send" disabled={this.props.disabled} />
			</form>
		)
	}
}

export default AboutMe;