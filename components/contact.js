/*
	Contact component
*/
import React from 'react';

class Contact extends React.Component{
	render() {
		return (
			<div id='contact'>
				<form className="contact-me" action="http://formspree.io/benjamin.j.arias@gmail.com"
	      method="POST" onSubmit={this.props.validateSending}>
					<p className="contact-title">{this.props.contactTitle}</p>
					<label htmlFor="name">
						<p>What's your name? </p>
						<input name="name" id="name" type="text" placeholder="Type in your name" autoComplete="on" disabled={this.props.disabled} required />
					</label>

					<br/>

					<label htmlFor="mail"> 
						<p>And your email? </p>
						<input name="_replyto" id="mail" type="text" placeholder="Type in your email address" autoComplete="on" disabled={this.props.disabled}  required/>
					</label>

					<br/>

					<label htmlFor="message"> 
						<p>Please state the object of your inquiry </p> 
						<textarea name="message" id="message" placeholder="Type in your message" disabled={this.props.disabled} required/>
					</label>

					<input className="form-send" type="submit" value="Send" disabled={this.props.disabled} />
				</form>
			</div>

		)
	}
}

export default Contact;