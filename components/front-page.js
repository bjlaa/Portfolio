/*
	Front Page Component
	<FrontPage />
*/

import React from 'react';
import Head from '../components/head.js';
import Menu from '../components/menu.js';
import Footer from '../components/footer.js';
import Work from '../components/work.js';
import Skills from '../components/skills.js';
import CVResume from '../components/cvresume.js';
import AboutMe from '../components/about-me.js';
import Contact from '../components/contact.js';
import Social from '../components/social.js';

class FrontPage extends React.Component {
	scrollToDiv(target) {
		console.log(target);
		var $target = $(target);
		var $root = $('html,body');
		if($target.length) {
			$root.animate({
				scrollTop: $target.offset().top
			}, 'slow');			
		}
	}

	render() {
		return (
			<div>
				<div className="frontpage">	
					
					<Menu scrollToDiv={this.scrollToDiv.bind(this)}/>
					<div className='arrow' onClick={this.scrollToDiv.bind(this, '#work')}>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
				<Head />
				<Work/>
				<Skills/>
				<CVResume/>
				<AboutMe/>
				<Contact/>
				<Footer/>
			</div>
		)
	}
}

export default FrontPage;

