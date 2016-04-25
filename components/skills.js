/*
	Skills Component
	<Skills />
*/
import React from "react";
import {data} from "../scripts/data-model";
import Footer from '../components/footer.js';


class Skills extends React.Component {
	render() {
		return (
			<div id='skills' className="skills">
				<SkillItem data={data} />
				<Footer />
			</div>
		)
	}
}
class SkillItem extends React.Component {
	render() {
		var skill = this.props.data.skills.map(function(e) {
			return (
				<div className={e.class} key={e.id}>
					<p className="title-skill">{e.title}</p>
					<img className="skill-img" src={e.imageURL} alt={e.imageAlt}/>
					<div className="keywords">{e.keywords}</div>
				</div>
			)
		});
		return (
			<div className="skill-list">
				{skill}
			</div>
		)
	}
}

export default Skills;